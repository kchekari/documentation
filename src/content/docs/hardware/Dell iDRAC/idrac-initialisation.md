---
title: "DELL iDRAC Initialisation"
tableOfContents: false
sidebar:
  label: "iDRAC Initialisation"
date: 2025-12-18
tags:
    - Proxmox
    - iDRAC
authors:
 - Karim
featured: true
---
l’iDRAC (Integrated Dell Remote Access Controller) est un outil intégré aux serveurs Dell (R660xs) dans notre cas et qui permet de configurer le serveur sans avoir à se connecter avec un clavier et une souris.

![alt text](images/idrac-initialisation-1766064853274.png)

Pour la première connexion, il faut créer un mot de passe pour le compte utilisateur root :

### Changement du mot de passe

Lors de la première connexion, nous sommes invités à saisir le nouveau mot de passe de l’utilisateur root.

![alt text](images/idrac-initialisation-1766064858456.png)

#### Mise à jour

Sur le tableau de bord, il faut commencer par mettre à jour le serveur.

![alt text](images/idrac-initialisation-1766064915162.png)

**Entretien > Mise à jour du système > Mise à jour Manuelle**.

En cochant la case utiliser l’adresse par défaut, l’adresse HTTPS se renseigne automatiquement.

![alt text](images/idrac-initialisation-1766064929706.png)

En bas de page, on peut cliquer sur Vérifier les MAJ.

La liste se met à jour.

![alt text](images/idrac-initialisation-1766064950548.png)

Nous lançons l’installation. Il est possible de suivre la progression en consultant la file d’attente.

![alt text](images/idrac-initialisation-1766064977372.png)
![alt text](images/idrac-initialisation-1766064987627.png)
![alt text](images/idrac-initialisation-1766064993828.png)

### Stockage

Il est possible de consulter les disques avec le menu **Stockage > Disques physiques**.

![alt text](images/idrac-initialisation-1766065004392.png)