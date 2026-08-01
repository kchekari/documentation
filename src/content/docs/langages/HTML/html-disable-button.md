---
title: "HTML : Boutons désactivés"
tableOfContents: false
sidebar:
  label: "HTML : Boutons désactivés"
date: 2025-12-19
slug: html-disable-button
tags:
  - Proxmox
authors:
  - Karim
featured: true
---

### Description

Les boutons désactivés en HTML sont des éléments de l’interface utilisateur qui sont inactifs et sur lesquels l’utilisateur ne peut pas cliquer. Ils sont souvent utilisés pour masquer des fonctionnalités ou des informations de l’application aux utilisateurs non autorisés.

Par exemple, un bouton « Modifier » peut être désactivé pour empêcher un utilisateur de modifier des données sensibles.

Cependant, il est important de noter que les boutons désactivés ne sont pas censés être utilisés comme méthode de sécurité pour empêcher l’utilisateur de réaliser certaines actions.

### Prérequis d’exploitation

Pour exploiter cette vulnérabilité, il est nécessaire d’avoir accès à une page HTML comportant des boutons désactivés.

#### Connaissances nécessaires

- Savoir ajouter et modifier des éléments HTML dans une page Web ;
- Savoir utiliser l’attribut « disabled » pour désactiver des éléments de formulaire.

#### Outils nécessaires

- Avoir accès à une console de navigateur (Firefox, Chrome).

### Flux d’exécution

#### Explorer

Naviguer sur l’application afin d’identifier les boutons comportant l’attribut « disabled ».

#### Expérimenter

Tenter de cliquer sur le bouton et voir si il est bien inactif et qu’il ne réagit pas au clic.

#### Exploiter

Consulter les solutions de chaque challenge.

### Conséquences potentielles

Une exploitation réussie de ce type de vulnérabilité peut permettre :

- L’accès à un espace privé de l’application ;
- La validation d’un formulaire restreint.

### Contre-mesures

Les contre-mesures suivantes peuvent être mises en œuvre :

- Valider les actions et les entrées de l’utilisateur côté serveur plutôt que côté client  : cela permet de s’assurer que seules les actions autorisées sont effectuées et que les données sont sécurisées.
- Supprimer les champs désactivés du formulaire : si un champ de formulaire n’est pas utilisé, il est recommandé de le supprimer complètement du formulaire plutôt que de le désactiver. Cela peut empêcher un attaquant de l’utiliser pour envoyer ou forcer l’envoi de données malveillantes.

### How it works

Le scénario suivant peut être joué via l’exploitation de cette vulnérabilité :

    Forcer l’accès à un bouton ou à un input désactivé afin d’accéder à des ressources sensibles ou potentiellement utiliser celui-ci comme point d’entrée pour une injection de code ou de commande.

#### Exemple 1

Voici un exemple de code HTML pour un bouton classique :

```html
<button type="button">Cliquez ici</button>
```

Dans cet exemple, le bouton affichera le texte « Cliquez ici » et ne sera pas associé à une action particulière. Le type « button » indique que ce bouton n’a pas de comportement par défaut (contrairement au type « submit » qui soumettra le formulaire). Vous pouvez également ajouter une classe, un ID, du style ou d’autres attributs pour personnaliser l’apparence et le comportement du bouton en fonction de vos besoins.

#### Exemple 2

Voici une page simple en HTML contenant un bouton qui est désactivé :

```html
<!DOCTYPE html>
<html>
<head>
 <title>Page avec bouton désactivé</title>
</head>
<body>
<!-- Ce bouton est désactivé grâce à l'attribut "disabled" -->
 <button disabled>Bouton désactivé</button>
</body>
</html>
```

Dans ce code un attaquant peut facilement contourner le bouton désactivé en modifiant le code HTML de la page avec un débogueur de navigateur.
