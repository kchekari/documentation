---
title: "VMWare Workstation : Booter une machine virtuelle sur une clé USB"
tableOfContents: true
sidebar:
  label: "VMWare Workstation - Boot USB"
date: 2026-01-17
slug: vmware-workstation-boot-usb
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---

Il est possible de configurer une machine virtuelle VMWare Workstation pour qu'elle démarre directement à partir d'une clé USB. Cela peut être utile pour tester des systèmes d'exploitation ou des outils de récupération sans avoir à les installer sur le disque dur virtuel.

:::caution
Assurez-vous que la clé USB est correctement insérée et reconnue par votre système avant de commencer.
:::

[https://www.youtube.com/watch?v=ka_HDBn29LY](https://www.youtube.com/watch?v=ka_HDBn29LY)

## Étapes pour booter une VM sur une clé USB

1. **Ouvrez VMWare Workstation** et sélectionnez la machine virtuelle que vous souhaitez configurer.

2. Modifiez les paramètres de la machine virtuelle en cliquant sur "Edit virtual machine settings".

![alt text](./images/vm-boot-usb-1768654924606.png)

3. Dans la section "Hardware", cliquez sur "Add..." pour ajouter un nouveau périphérique.

![alt text](./images/vm-boot-usb-1768655067968.png)

4. Identifier le numéro du disque qui correspond à votre clé USB.

![alt text](./images/vm-boot-usb-1768655045880.png)

5. Sélectionnez "Hard Disk" et cliquez sur "Next".

![alt text](./images/vm-boot-usb-1768655092793.png)

6. Choisir un disque IDE.

![alt text](./images/vm-boot-usb-1768655118516.png)

7. Choisissez "Use a physical disk (for advanced users)" et cliquez sur "Next".

![alt text](./images/vm-boot-usb-1768655138246.png)

8. Sélectionnez le disque correspondant à votre clé USB dans le menu déroulant "Physical drive" et cliquez sur "Next".

![alt text](./images/vm-boot-usb-1768655161706.png)

9. Renommer le disque.

![alt text](./images/vm-boot-usb-1768655188887.png)

10. Dans les paramètres avancés, il faut bien être configuré en BIOS.

![alt text](./images/vm-boot-usb-1768655236714.png)

## Démarrer la machine virtuelle

1. Démarrez la machine virtuelle mais en utilisant le menu "Power on to BIOS".

![alt text](./images/vm-boot-usb-1768655261095.png)

2. Dans le BIOS, allez dans l'onglet "Boot" et sélectionnez votre clé USB comme premier périphérique de démarrage.

![alt text](./images/vm-boot-usb-1768655345190.png)

3. Sauvegardez les modifications et quittez le BIOS. La machine virtuelle devrait maintenant démarrer à partir de la clé USB.

![alt text](./images/vm-boot-usb-1768655378394.png)

4. Le boot sur la clé USB est réussi !

![alt text](./images/vm-boot-usb-1768655409406.png)