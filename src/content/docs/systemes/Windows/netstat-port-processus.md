---
title: "Netstat : Trouver les ports d’un processus"
tableOfContents: false
sidebar:
  label: "Netstat - Ports d'un processus"
---

Il peut être pratique de connaitre les ports en écoute d’un processus.
Pour cela, ouvrir le gestionnaire des tâches pour trouver le PID du programme :

![alt text](./images/image-75.png)

Puis ouvrir un Terminal Windows et saisir la commande :

```bash
{
# en cmd :
netstat -ano | find "6840"
 
# en PowerShell :
netstat -ano | Select-String "6840"
```

Le paramètre -a liste toutes les connexions et ports, -n force l’affichage numérique, et -o ajoute la colonne PID.

![alt text](./images/image-76.png)