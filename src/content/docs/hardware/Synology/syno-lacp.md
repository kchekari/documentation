---
title: "Synology : Activation LACP"
tableOfContents: false
sidebar:
  label: "Activation LACP"
date: 2025-12-19
slug: syno-lacp
tags:
  - Synology
authors:
  - Karim
featured: true
---
Si vous avez un NAS Synology et que vous disposez de deux interfaces réseau, il est possible de mettre en place une agrégation de lien, c’est-à-dire que votre NAS pourra envoyer non pas 1 Gb/s, mais environ 2Gb/s.

Si vous avez un réseau en 1Gb/s, cela peut rester intéressant, car si vous êtes connecté à plusieurs en même temps, la bande passante partagée sera alors de 2Gb/s quand même.

Direction l’interface de configuration du commutateur, menu « Link Aggregation »

Il faudra activer la configuration que lorsque le synology est configuré aussi sinon vous en perdrez l’accès.

![alt text](images/syno-lacp-1766157358916.png)

On lui donne ensuite un nom et on positionne les deux interfaces concernées (pour moi la 21 et la 22) ainsi que le type LACP.

![alt text](images/syno-lacp-1766157368831.png)

C’est tout bon, on passe au Synology.

![alt text](images/syno-lacp-1766157378744.png)

Dans le panneau de configuration, on sélectionne Créer un bond dans le réseau

![alt text](images/syno-lacp-1766157389606.png)

On sélectionne bien la technologie LACP

![alt text](images/syno-lacp-1766157397873.png)

Et les deux interfaces

![alt text](images/syno-lacp-1766157405781.png)

Il faut ensuite valider la configuration réseau en définissant la valeur par défaut

![alt text](images/syno-lacp-1766157419904.png)

En activant la configuration, on voit que le statut devient « up » sur le commutateur

![alt text](images/syno-lacp-1766157436535.png)
![alt text](images/syno-lacp-1766157446311.png)

Et sur le Synology aussi

C’est parti ! on a une bande passante doublée maintenant !

![alt text](images/syno-lacp-1766157454163.png)