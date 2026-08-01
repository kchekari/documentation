---
title: "Dell PowerVault ME5024 : Initialisation"
tableOfContents: false
sidebar:
  label: "ME5024 - Initialisation"
date: 2025-12-18
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
Lors du renouvellement de la ferme de serveur, nous avons reçu une baie SAN DELL PowerVault ME5024 avec 7 disques SSD SAS et 16 disques SAS. Voilà les étapes de son initialisation.

Voilà les informations de connexion par défaut :
- IP address source: Manual
- Controller A IP address: 10.0.0.2
- Controller B IP address: 10.0.0.3
- IP subnet mask: 255.255.255.0
- Gateway IP address: 10.0.0.1

On configure son ordinateur sur la place d’IP c’est parti.

On arrive sur la page de connexion

![alt text](./images/dell-me5024-init-1766065485812.png)

Après avoir cliqué sur Démarrer, il faut créer un utilisateur et son mot de passe.

![alt text](./images/dell-me5024-init-1766065497049.png)

Un pop-up nous prévient que la création est réussie.

![alt text](./images/dell-me5024-init-1766065509281.png)

Nous avons le choix du micrologiciel. La baie n’étant pas raccordée à Internet, il n’est pas possible de la mettre à jour dans l’immédiat.

![alt text](./images/dell-me5024-init-1766065523579.png)

L’assistant d’installation se lance ensuite avec quatre catégories de configuration.

![alt text](./images/dell-me5024-init-1766065539100.png)

## Configuration du système

On va choisir de configurer l’adresse IPv4 et le DNS.

![alt text](./images/dell-me5024-init-1766065552677.png)

:::tip
Pour ne pas perdre le réseau, il est préférable de configurer le réseau de destination sur le second contrôleur.
:::

![alt text](./images/dell-me5024-init-1766065564093.png)

On va ensuite donner un nom à chaque contrôleur puis préciser un serveur DNS.

![alt text](./images/dell-me5024-init-1766065586088.png)

On va ensuite configurer la date et l’heure en utilisant un serveur NTP (si ça ne fonctionne pas, il est possible de mettre une IP).

![alt text](./images/dell-me5024-init-1766065595038.png)

On reste dans un premier temps sur les paramètres utilisateur locaux.

![alt text](./images/dell-me5024-init-1766065601997.png)

On peut ensuite voir notre utilisateur créé au début de l’installation et il est possible d’en rajouter des autres.

![alt text](./images/dell-me5024-init-1766065610732.png)

Pour le moment, nous n’allons pas activer le monitoring.

![alt text](./images/dell-me5024-init-1766065621336.png)

## SupportAssist

Deuxième étape SupportAssist.

![alt text](./images/dell-me5024-init-1766066472203.png)

On accepte le contrat de licence

![alt text](./images/dell-me5024-init-1766066461092.png)

On choisit de se connecter directement à DELL par Internet.

![alt text](./images/dell-me5024-init-1766066481752.png)

On renseigne ensuite les informations de contact.

![alt text](./images/dell-me5024-init-1766066489777.png)

Ensuite, on valide les informations

![alt text](./images/dell-me5024-init-1766066499921.png)

## Configuration du stockage

La volonté est de mettre en place des volumes de stockage mélangeant des disques SSD SAS et SAS.
On va choisir un type de disque virtuel afin de pouvoir faire du provisionnement dynamique.

![alt text](./images/dell-me5024-init-1766066528850.png)

Il faut créer un groupe de disques SSD SAS et un groupe de disques SAS dans le pool A.

![alt text](./images/dell-me5024-init-1766066541571.png)

Les disques SSD SAS seront en RAID6 et les disques SAS seront en ADAPT.

![alt text](./images/dell-me5024-init-1766066549874.png)

On garde un disque SSD SAS en Spare.

![alt text](./images/dell-me5024-init-1766066561912.png)

On a donc un pool A avec deux groupes de disques.

![alt text](./images/dell-me5024-init-1766066571978.png)

Pour le moment, on passe au tableau de bord en passant le provisionnement car nous attendons le branchement des serveurs.

## Tableau de bord

On arrive sur le tableau de bord de la baie SAN

![alt text](./images/dell-me5024-init-1766066600137.png)

## Mise à jour

On peut vérifier/installer les mises à jour dans le menu Maintenance > Micrologiciel > Check for New Firmware Updates

![alt text](./images/dell-me5024-init-1766066618775.png)

## Création des volumes

Nous pouvons découper notre pool de 55go en plusieurs volumes.

Provisionnement > Volumes

![alt text](./images/dell-me5024-init-1766066642338.png)

![alt text](./images/dell-me5024-init-1766066654622.png)

## Créations des groupes d’hôtes et des hôtes.

Nous avons 3 serveurs avec deux connexions SAS chacun.

### Renommage des initiateurs

Nous allons déjà identifier les initiateurs.

![alt text](./images/dell-me5024-init-1766066683725.png)

En connectant les câbles et en regardant le port connecté, nous allons donner des pseudos aux initiateurs

![alt text](./images/dell-me5024-init-1766066703180.png)

### Création des hotes

On va ensuite regrouper les initiateurs par serveurs

![alt text](./images/dell-me5024-init-1766066722863.png)
![alt text](./images/dell-me5024-init-1766066740906.png)

### Création d’un groupe d’hôte

Dans provisionnement > Hôtes

![alt text](./images/dell-me5024-init-1766066750682.png)

On sélectionne les hôtes et on sélectionne l’action Ajouter au groupe d’hôtes.

![alt text](./images/dell-me5024-init-1766066759476.png)

On nomme notre groupe.

![alt text](./images/dell-me5024-init-1766066767228.png)

Notre groupe est bien créé.

![alt text](./images/dell-me5024-init-1766066774196.png)