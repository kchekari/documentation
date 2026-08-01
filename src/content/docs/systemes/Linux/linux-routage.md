---
title: "Linux - Activer le routage IP"
tableOfContents: false
sidebar:
  label: "Linux - Activer le routage IP"
date: 2026-03-13
slug: linux-activer-routage-ip
tags:
    - Linux
    - Réseaux
    - Routage
authors:
 - Karim
featured: true
---
# Linux - Activer le routage IP

Pour activer le routage IP sur un système Linux, vous pouvez suivre les étapes suivantes :

1. Ouvrez un terminal avec des privilèges administratifs (par exemple, en utilisant `sudo`).
2. Exécutez la commande suivante pour activer le routage IP temporairement (jusqu'au prochain redémarrage) :

   ```bash
   sudo sysctl -w net.ipv4.ip_forward=1
   ```

   ![alt text](images/linux-routage-1773411302478.png)

3. Pour rendre cette modification permanente, éditez le fichier de configuration `sysctl.conf` :

   ```bash
   sudo nano /etc/sysctl.conf
   ```

4. Ajoutez ou modifiez la ligne suivante pour activer le routage IP :

   ```
   net.ipv4.ip_forward=1
   ```

5. Enregistrez le fichier et quittez l'éditeur.
6. Appliquez les modifications en exécutant la commande suivante :

   ```bash
   sudo sysctl -p
   ```

Après avoir suivi ces étapes, le routage IP sera activé sur votre système Linux. Vous pouvez vérifier que le routage est activé en exécutant la commande suivante :

```bash
sysctl net.ipv4.ip_forward
```

Si la sortie affiche `net.ipv4.ip_forward = 1`, cela signifie que le routage IP est activé avec succès.
N'oubliez pas que pour que le routage fonctionne correctement, vous devrez également configurer les règles de pare-feu et les tables de routage appropriées en fonction de votre réseau et de vos besoins spécifiques.