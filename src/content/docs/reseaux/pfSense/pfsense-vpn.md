---
title: "pfSense - VPN Site à site"
tableOfContents: true
sidebar:
  label: "pfSense - VPN"
date: 2026-01-17
slug: pfsense-vpn-site-to-site
tags:
    - pfSense
    - Linux
authors:
  - Karim
featured: true
---
L'objectif de ce tutoriel est de configurer un VPN site à site entre deux routeurs pfSense. Un VPN site à site permet de connecter deux réseaux distants de manière sécurisée, comme s'ils étaient sur le même réseau local.

Nous avons deux routeurs pfSense, chacun connecté à son propre réseau local. Nous allons configurer un VPN IPsec entre les deux routeurs pour permettre la communication entre les deux réseaux.

Il existe plusieurs méthodes pour mettre en place un VPN site à site entre deux réseaux, Si vous souhaitez connecter de nombreux sites en eux, il est préconisé d’utiliser une PKI avec des certificats SSL afin de simplifier la gestion.

Pour une connexion entre deux sites, il est plus simple d’utiliser des clés partagées, mais la sécurité est moins forte. Le principe est de définir un site « serveur » (SITE 1) et l’autre site sera défini comme « client » (SITE2).

Si vous êtes amenés à ajouter d’autres sites, il faudra les ajouter en tant que « client ».

## Configuration du SITE 1 (Serveur)

Aller dans le menu VPN > OpenVPN :

![alt text](./images/pfsense-vpn-1773674525366.png)

Il faut ensuite ajouter un serveur depuis l’onglet « Servers ».

Il existe plusieurs « Server mode » :

- **Peer to peer (SSL/TLS) : Pour avoir un VPN site à site avec une authentification par certificat.**
- Peer to peer (Shared Key) : pour avoir un VPN site à site avec une authentification par clé partagée.
- Remote Access (SSL/TLS) : Avoir un VPN nomade (pour les utilisateurs) avec une authentification par certificat.
- Remote Access (User Auth) : Avoir un VPN nomade (pour les utilisateurs) avec une authentification par login/password.
- Remote Access (SSL/TLS + User Auth) : Avoir un VPN nomade (pour les utilisateurs) avec une authentification par certificat et login/password.

Nous avons fait le choix technique de créer un serveur Peer to peer (SSL/TLS) car le Peer to peer (Shared Key) va devenir obsolète.

Avant de démarrer, il faut aller créer une autorité de certification `System > Certificate > Authorities`

### Création d'un autorité de certification

- Mettre une description
- Préciser un Common Name
- Valider par Save

![alt text](./images/pfsense-vpn-1773674782189.png)

### Création d'un certificat serveur

- Mettre une description
- Choisir l'autorité de certification
- Une durée de vie inférieure à 368 jours
- Préciser un Common Name
- Choisir un type de certificat : Server
- Valider par Save

![alt text](./images/pfsense-vpn-1773675751943.png)
![alt text](./images/pfsense-vpn-1773676102922.png)

### Création d'un certificat Client

On recommence la procédure, mais cette fois pour ajouter un certificat client

![alt text](./images/pfsense-vpn-1773676262638.png)
![alt text](./images/pfsense-vpn-1773676276884.png)

Nous avons donc un certificat client et un certificat serveur

On retourne ensuite sur la création de notre serveur VPN

### Configuration du VPN Serveur

- **Protocol et Local Port** : Par défaut, OpenVPN fonctionne sur le port UDP 1194. Il est possible de le modifier notamment sur le port est bloqué sur le réseau entre les deux sites.

Une solution pourrait être de passer en TCP 443, car le port est très souvent ouvert, mais passer en TCP pourrait ralentir les transmissions. Nous resterons sur la configuration standard.

**Rappel** : Le TCP est un protocole de transport fiable, il vérifie que les paquets ont bien été reçus ce qui le rend plus lent que l’UDP.

- **Cryptographic Settings** : Laisser cocher la case « Automatically generate TLS key », il faudra ensuite la copier sur le client.
- **Peer certificate Authority** : Choisir l'autorité précédemment créée.
- **Server certificate** : Choisir le certificat serveur.
- **IPv4 Tunnel Network** : Renseigner le réseau utilisé pour le tunnel VPN. Pour connecter deux sites, un /30 suffit (2 hôtes disponibles). Par défaut, le sous-réseau utilisé par OpenVPN est 10.0.8.0/30.
- **IPv4 Remote network(s)** : Il faut indiquer le réseau de destination du tunnel, il est possible d’en ajouter plusieurs en séparant les réseaux par des virgules. Notation avec CIDR.
- **Concurrent connections** : Nombre de connexions client simultané sur le serveur. Le mettre à 1. Terminer par sauvegarder la configuration.

![alt text](./images/pfsense-vpn-1773676708855.png)

### Ajout des règles de pare-feu

Il faut autoriser le trafic VPN au niveau du Firewall. Aller dans le menu `Firewall > Rules > WAN`.

Créer une règle avec la configuration :

- **Source** : IP publique du site distant (SITE 2).
- **Destination** : IP publique du site local (SITE 1).
- **Protocol/Destination Port** : UDP 1194 (port d’OpenVPN).

![alt text](./images/pfsense-vpn-1773993348314.png)

Ajouter également une règle pour autoriser tous les flux transitant par le VPN.

![alt text](./images/pfsense-vpn-1773993361402.png)

### Export des certificats

Dans l'onglet "Authorites", on va exporter le certificat de l'autorité.

![alt text](./images/pfsense-vpn-1773929883411.png)

Dans l'onglet "Certificates", on va exporter le certificat et la clé.

![alt text](./images/pfsense-vpn-1773929978282.png)

## Configuration coté « client » sur SITE 2

### Importation des clés de l'autorité

Dans le menu `Certificates > Authorities` nous allons importer le certificat.

Il faut renseigner les champs :

- Description
- Method
- Certificate data (ouvrir le fichier avec un bloc-notes et copier le contenu)

![alt text](./images/pfsense-vpn-1773930401092.png)

![alt text](./images/pfsense-vpn-1773930435728.png)

### Importation des clés du client

Dans l'onglet client, on importe le certificat avec la method "Import an existing Certificate" en copiant les données du certificat et la clé privée.

![alt text](./images/pfsense-vpn-1773930559521.png)

![alt text](./images/pfsense-vpn-1773930586393.png)

Aller dans le menu `VPN > OpenVPN` mais cette fois dans l’onglet `Clients > + ADD`.

![alt text](./images/pfsense-vpn-1773930634621.png)

Pour correspondre à la configuration du serveur OpenVPN, il faut choisir le mode Peer to peer (SSL/TLS) et les options suivantes :

- Description
- Server mode
- Server host or address
- Server port
- TLS Key
- Peer Certificate Authority
- Client Certificate
- IPv4 Tunnel Network
- IPv4 Remote network(s)

![alt text](./images/pfsense-vpn-1773930894540.png)

![alt text](./images/pfsense-vpn-1773930955317.png)

![alt text](./images/pfsense-vpn-1773931000285.png)

Ajouter la même règle sur le trafic OpenVPN dans le Firewall.

![alt text](./images/pfsense-vpn-1773993432671.png)

### Vérification de la connexion VPN

Il est possible de voir l’état de la connexion VPN dans `Status > OpenVPN`.

![alt text](./images/pfsense-vpn-1773993480592.png)

![alt text](./images/pfsense-vpn-1773993513893.png)

Les logs OpenVPN sont dans `Status > System logs > Firewall` ou `OpenVPN`.

![alt text](./images/pfsense-vpn-1773993562748.png)

Tester un ping depuis le PC sur SITE2 vers le Serveur du SITE1 :

![alt text](./images/pfsense-vpn-1773994218552.png)

En conclusion, vous constatez qu’un VPN site à site permet aux machines de deux réseaux de communiquer entre leur LAN sans avoir à installer un client sur les postes utilisateurs.