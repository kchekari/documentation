---
title: "Configuration Cisco SF-500"
tableOfContents: false
sidebar:
  label: "SF-500 - Commandes"
date: 2025-12-19
slug: sf500-commande
tags:
  - Cisco
authors:
  - Karim
featured: true
---
Tout bon admin réseaux connait les commandes Cisco IOS de base, je peux configurer un 2960 avec la main gauche les yeux fermés. En revanche, je suis tombé sur une SF500-24 qui a l’avantage d’être un commutateur POE de niveau 3. Parfait pour les TP avec des bornes Wifi ou des téléphones IP.

En revanche, les commandes ne sont pas tout à fait similaire à celle que je connais déjà.

J’ai donc décidé de faire un article pour historiser mes commandes utiles.

#### Réinitialisation du switch

Maintenir 10 secondes sur le bouton reset.

#### Connexion port console

Saisissez les informations de connexion par défaut :

- Nom d’utilisateur : cisco
- Mot de passe par défaut :  cisco  (les mots de passe sont sensibles à la casse)

![alt text](images/sf500-commande-1766160026774.png)

#### Passer le switch en N3 ou N2

```bash
set system mode switch queues-mode 4  //passer en niveau 2
set system mode router queues-mode 4    //passer en niveau 3
```

![alt text](images/sf500-commande-1766160204363.png)

Pour le N3, il faut redémarrer

#### Revenir en arrière

Le bouton backspace ne fonctionne pas, pour effacer le caractère précédent, il faut faire SHIFT+BACKSPACE.

#### Création d’un VLAN

```bash
vlan [numero] //Création d'un VLAN
sh vlan //affichage des VLAN
```

![alt text](images/sf500-commande-1766160226037.png)

#### Nommer un VLAN

```bash
interface vlan [numero]
name [nom]
```

![alt text](images/sf500-commande-1766160238247.png)

#### Affecter une interface à un VLAN

```bash
//Affecter une interface
int fa1/2/1
sw mode acc
sw acc vlan [numero]
 
//Affecter plusieurs interfaces
int range fa1/2/1-2
sw mode acc
sw acc vlan [numero]
```

![alt text](images/sf500-commande-1766160251008.png)

#### Afficher les IP du commutateur

```bash
sh ip interface
```

![alt text](images/sf500-commande-1766160261554.png)

#### Désactiver le DHCP sur un VLAN

```bash
int vlan [numero]
no ip addr dhcp
```

![alt text](images/sf500-commande-1766160337508.png)

#### Affecter une ip à un VLAN

```bash
int vlan [numero]
ip addr [ip] [masque]
```

![alt text](images/sf500-commande-1766160325316.png)

#### Afficher les routes

```bash
sh ip route
```

![alt text](images/sf500-commande-1766160312465.png)