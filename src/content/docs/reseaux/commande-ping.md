---
title: "Commande - Ping"
tableOfContents: false
sidebar:
  label: "Commande - Ping"
---
:::note
La commande `ping` est un outil de diagnostic réseau utilisé pour tester la connectivité entre deux hôtes sur un réseau IP. Elle envoie des paquets ICMP (Internet Control Message Protocol) Echo Request à une adresse IP spécifiée et attend des réponses Echo Reply. Le but principal de `ping` est de vérifier si un hôte est accessible et de mesurer le temps de réponse entre l’envoi du paquet et la réception de la réponse.
Elle est implémentée dans la plupart des systèmes d’exploitation, y compris Windows, Linux et macOS.
:::
La commande ping (abréviation de Packet Internet Groper) est un outil de diagnostic réseau qui permet de tester la connectivité entre deux machines (ou entre un poste et un site Internet).

Concrètement, elle envoie des paquets de test (ICMP Echo Request) à une adresse IP ou un nom de domaine, et attend en retour une réponse (ICMP Echo Reply).
Elle permet ainsi de savoir :
- Si la cible est joignable.
- Si la connexion est stable.
Et d’obtenir le temps de réponse entre les deux machines.
C’est une commande indispensable pour diagnostiquer un problème de réseau local, de passerelle, ou d’accès Internet.

Syntaxe de base :
```cmd
ping [options] <adresse_ip_ou_nom_de_domaine>
```
Exemples d’utilisation :
- Pour pinguer une adresse IP :
```cmd
ping 192.168.1.1
```
- Pour pinguer un nom de domaine :
```cmd
ping www.example.com
```
Options courantes :
- `-c <nombre>` : Spécifie le nombre de paquets à envoyer (Linux/macOS).
- `-n <nombre>` : Spécifie le nombre de paquets à envoyer (Windows).
- `-t` : Pingue en continu jusqu’à interruption (Windows).
- `-i <seconde>` : Définit l’intervalle entre les envois de paquets (Linux/macOS).
- `-s <taille>` : Définit la taille des paquets envoyés (Linux/macOS).
Interprétation des résultats :
- `Réponse de <adresse_ip> : octets=32 temps=<ms> TTL=<valeur>` : Indique que la cible a répondu avec succès.
- `Délai d’attente de la demande dépassé.` : Indique que la cible n’a pas répondu dans le délai imparti.
- Statistiques : À la fin du test, des statistiques sont affichées, incluant le nombre de paquets envoyés, reçus, perdus, et le temps moyen de réponse.

La commande ping est un outil simple mais puissant pour diagnostiquer les problèmes de connectivité réseau et évaluer les performances de la connexion entre deux points sur un réseau.