---
title: "Windows 11 - Activer le bureau à distance"
tableOfContents: true
sidebar:
  label: "Activer RDP"
date: 2025-12-16
tags:
    - Windows
authors:
 - Karim
featured: true
---
L’utilisation du Bureau à distance de Windows permet de prendre le contrôle d’un ordinateur ou d’un serveur sans avoir besoin d’être physiquement devant la machine.

On l’utilise pour gérer et administrer les serveurs du réseau depuis sa propre machine. Cette solution est pratique, sécurisée et fait gagner du temps, car elle évite les déplacements et centralise la gestion.

Elle illustre aussi une pratique courante en entreprise, où les administrateurs système utilisent le Bureau à distance pour maintenir et superviser les serveurs à distance.

### Connaitre son adresse IP

Lancer le terminal Windows et taper la commande :

```bash
ipconfig
```

![alt text](images/windows-rdp-1765921278387.png)

On voit que l’ordinateur a pour IP : 192.168.110.52

### Activation du bureau à distance

Nous allons chercher le paramètre « Paramètres du bureau à distance« 

Paramètres > Système > Bureau à distance > Activer

![alt text](images/windows-rdp-1765921293480.png)

Par défaut, votre utilisateur administrateur à un accès (à partir du moment où il a un mot de passe).

### Test de connexion

**Depuis le PC hôte**

Taper « mstsc » ou « Bureau à distance »

![alt text](images/windows-rdp-1765921310146.png)

Dans la fenêtre qui s’ouvre, mettre l’IP du PC virtuel puis saisir les informations de connexion.

![alt text](images/windows-rdp-1765921320617.png)

Valider la connexion et autoriser la connexion.

![alt text](images/windows-rdp-1765921330517.png)

Le bureau de Windows est accessible depuis le PC hôte.

![alt text](images/windows-rdp-1765921345060.png)