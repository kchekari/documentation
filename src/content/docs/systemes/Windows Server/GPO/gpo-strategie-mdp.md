---
title: "GPO - Stratégie de mot de passe"
tableOfContents: false
sidebar:
  label: "GPO - Stratégie de mot de passe"
date: 2026-08-19
lastUpdated: 2026-08-19
tags:
  - Microsoft
  - GPO
  - AD
  - Mot de passe
authors:
  - Karim
featured: true
---
La stratégie de mot de passe permet de définir les règles de sécurité pour les mots de passe des utilisateurs du domaine.
Il ne faut pas créer une stratégie de mot de passe sur une UO, car elle ne sera pas appliquée. La stratégie de mot de passe doit être créée sur le domaine. Il est conseillé de modifier la `Default Domain Policy` pour définir les règles de sécurité des mots de passe.

![alt text](images/gpo-strategie-mdp-1787144205981.png)

Aller dans `Configuration ordinateur > Stratégies > Paramètres Windows > Paramètres de sécurité > Stratégies de compte > Stratégie de mot de passe`.

![alt text](images/gpo-strategie-mdp-1787144349008.png)