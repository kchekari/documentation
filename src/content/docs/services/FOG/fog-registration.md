---
title: "FOG : Enregistrement des postes clients"
tableOfContents: false
sidebar:
  label: "FOG - Enregistrement"
date: 2026-01-17
slug: fog-registration
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
Pour pouvoir gérer les postes clients depuis l'interface web de FOG, il est nécessaire d'enregistrer ces postes. Cette étape permet à FOG de reconnaître et d'administrer les machines au sein du réseau.

Deux options sont disponibles, l'enregistrement rapide et l'enregistrement complet.
- L'enregistrement rapide permet d'ajouter rapidement un poste client en utilisant son adresse MAC. Cette méthode est idéale pour les environnements où la simplicité et la rapidité sont prioritaires.
- L'enregistrement complet offre une configuration plus détaillée, incluant des informations supplémentaires telles que le nom de l'hôte, le groupe d'appartenance, et d'autres paramètres spécifiques. Cette méthode est recommandée pour les environnements nécessitant une gestion plus fine des postes clients.

Quoi qu'il en soit, même avec un registrement rapide, il est toujours possible de modifier les paramètres du poste client ultérieurement via l'interface web de FOG.

:::note
Pour pouvoir faire un enregistrement rapide, il faut activer dans les options de Fog le **QUICKREG AUTOPOP**.

![alt text](./images/fog-registration-1768897761028.png)

![alt text](./images/fog-registration-1768897793265.png)
:::

On commence par démarrer sur le poste en PXE.

![alt text](./images/fog-registration-1768837163739.png)

Nous voyons que l'hôte n'est pas enregistré. Nous allons faire un enregistrement rapide **Quick Registration ans Inventory**.

L'enregistrement se lance.

![alt text](./images/fog-registration-1768837255436.png)

Pour un enregistrement complet, saisir le nom d'hôte.

![alt text](./images/fog-registration-1768837939896.png)

Préciser l'image associée et le groupe si vous le souhaitez.

![alt text](./images/fog-registration-1768838006697.png)

![alt text](./images/fog-registration-1768838059324.png)

L'hote est bien enregistré.

![alt text](./images/fog-registration-1768838079051.png)

Et apparait sur l'interface web de FOG.

![alt text](./images/fog-registration-1768838104508.png)

:::caution
Pour renommer l'hôte ou modifier sa description, il faut au préalable lui avoir affecté une image
:::