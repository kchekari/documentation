---
title: "Windows 11 25H2 - Configuration sans Internet"
tableOfContents: false
sidebar:
  label: "Windows 25h2 - Configuration sans Internet"
date: 2026-08-03
lastUpdated: 2026-08-03
tags:
  - Windows
  - Windows 11
  - 25H2
  - Configuration sans Internet
authors:
  - Karim
featured: true
---

Lors de l’installation de Windows 11 25H2, Microsoft impose l’utilisation d’une connexion Internet et d'un compte Microsoft **Très déconseillé**.

Si ce n’est pas possible, nous allons voir comment désactiver ce contrôle.

Sur cet écran, appuyer sur CTRL+MAJ+J et taper :

![alt text](images/25h2-no-internet-1785836190610.png)

```
WinJS.Application.restart("ms-cxh://LOCALONLY")
```

![alt text](images/25h2-no-internet-1785836280272.png)

Puis appuyer sur `ECHAP`

Une fenêtre nous demandant de créer un compte local s’affiche.

![alt text](images/25h2-no-internet-1785836377967.png)

Je vous conseille de tous créer un compte identique :
Login : `etudiant`
Mot de passe : `Etudiant_1234`

Il faut ensuite répondre aux questions de sécurité pour pouvoir récupérer le mot de passe si vous l’oubliez. (mettre toto à chaques réponses).

Vous pouvez ensuite poursuivre l'installation de Windows 11 25H2 sans compte Microsoft et sans connexion Internet.

![alt text](images/25h2-no-internet-1785836581758.png)