---
title: "Les principales balises HTML"
tableOfContents: false
sidebar:
  label: "Les balises HTML"
date: 2026-11-17
tags:
  - html
authors:
  - Karim
featured: true
---

Le **HTML** structure une page Web. Pour chaque balise, voici son rôle, un exemple et son **rendu réel** dans Astro.

> Les rendus dépendent également du CSS du thème Astro. Les exemples de formulaire sont uniquement démonstratifs.

## Structure d'un document

`<!DOCTYPE html>`, `<html>`, `<head>`, `<meta>`, `<title>` et `<body>` définissent la structure de la page. Ils ne se rendent pas comme des éléments autonomes dans un article.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ma page</title>
</head>
<body>
  <h1>Bonjour !</h1>
</body>
</html>
```

**Rendu du contenu du `<body>` :**

<h1>Bonjour !</h1>

## Titres : `<h1>` à `<h6>`

Organisent les titres selon leur importance.

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Titre de niveau 3</h3>
```

**Rendu :**

<div>
  <h1>Titre principal</h1>
  <h2>Sous-titre</h2>
  <h3>Titre de niveau 3</h3>
</div>

## Paragraphe : `<p>`

Crée un paragraphe.

```html
<p>Premier paragraphe.</p>
<p>Deuxième paragraphe.</p>
```

**Rendu :**

<div>
  <p>Premier paragraphe.</p>
  <p>Deuxième paragraphe.</p>
</div>

## Texte important : `<strong>` et `<em>`

`<strong>` indique une importance forte ; `<em>` marque une emphase.

```html
<p>Un texte <strong>important</strong> et <em>accentué</em>.</p>
```

**Rendu :**

<p>Un texte <strong>important</strong> et <em>accentué</em>.</p>

## Autres mises en forme : `<b>`, `<i>`, `<u>`, `<mark>`, `<small>`, `<del>`, `<code>`

Modifient la présentation ou précisent le sens d'un fragment de texte.

```html
<p><b>Gras</b>, <i>italique</i>, <u>souligné</u>,
<mark>surligné</mark>, <small>petit</small>,
<del>supprimé</del> et <code>console.log()</code>.</p>
```

**Rendu :**

<p><b>Gras</b>, <i>italique</i>, <u>souligné</u>, <mark>surligné</mark>, <small>petit</small>, <del>supprimé</del> et <code>console.log()</code>.</p>

## Saut de ligne : `<br>` et séparation : `<hr>`

`<br>` force un saut de ligne ; `<hr>` marque une séparation thématique.

```html
<p>Ligne 1<br>Ligne 2</p>
<hr>
<p>Section suivante</p>
```

**Rendu :**

<div><p>Ligne 1<br>Ligne 2</p><hr><p>Section suivante</p></div>

## Lien : `<a>`

Crée un lien grâce à l'attribut `href`.

```html
<a href="https://developer.mozilla.org/fr/docs/Web/HTML">
  Documentation HTML
</a>
```

**Rendu :**

<a href="https://developer.mozilla.org/fr/docs/Web/HTML">Documentation HTML</a>

## Image : `<img>`

Affiche une image. `alt` décrit l'image pour l'accessibilité.

```html
<img src="https://placehold.co/180x90/png?text=HTML"
     alt="Illustration HTML" width="180" height="90">
```

**Rendu :**

<img src="https://placehold.co/180x90/png?text=HTML" alt="Illustration HTML" width="180" height="90" loading="lazy">

## Liste à puces : `<ul>` et `<li>`

Présente une liste sans ordre particulier.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

**Rendu :**

<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>

## Liste numérotée : `<ol>` et `<li>`

Présente des étapes dans un ordre défini.

```html
<ol>
  <li>Créer le fichier</li>
  <li>Écrire le HTML</li>
  <li>Ouvrir la page</li>
</ol>
```

**Rendu :**

<ol><li>Créer le fichier</li><li>Écrire le HTML</li><li>Ouvrir la page</li></ol>

## Tableau : `<table>`, `<tr>`, `<th>`, `<td>`

Crée un tableau de données avec des lignes et des cellules.

```html
<table>
  <thead><tr><th>Nom</th><th>Âge</th></tr></thead>
  <tbody>
    <tr><td>Emma</td><td>21</td></tr>
    <tr><td>Lucas</td><td>20</td></tr>
  </tbody>
</table>
```

**Rendu :**

<table><thead><tr><th>Nom</th><th>Âge</th></tr></thead><tbody><tr><td>Emma</td><td>21</td></tr><tr><td>Lucas</td><td>20</td></tr></tbody></table>

## Conteneurs : `<div>` et `<span>`

`<div>` regroupe des blocs ; `<span>` cible une portion de texte.

```html
<div style="border:1px solid #888;padding:12px">
  <p>Un mot <span style="color:red">rouge</span>.</p>
</div>
```

**Rendu :**

<div style="border:1px solid #888;padding:12px"><p>Un mot <span style="color:red">rouge</span>.</p></div>

## Structure sémantique : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

Décrit le rôle des zones d'une page. Dans cette démonstration, on évite d'imbriquer un deuxième `<main>` dans celui du site.

```html
<header><h2>Mon site</h2></header>
<nav><a href="#article-demo">Article</a></nav>
<main>
  <section>
    <article id="article-demo"><h3>Actualité</h3><p>Un article.</p></article>
  </section>
  <aside>Informations complémentaires</aside>
</main>
<footer>© Mon site</footer>
```

**Rendu simplifié (sans deuxième `<main>`) :**

<div style="border:1px solid #888;padding:12px">
  <header><h2>Mon site</h2></header>
  <nav><a href="#article-demo">Article</a></nav>
  <section><article id="article-demo"><h3>Actualité</h3><p>Un article.</p></article></section>
  <aside>Informations complémentaires</aside>
  <footer>© Mon site</footer>
</div>

## Formulaire : `<form>`, `<label>`, `<input>`, `<button>`

Permet de recueillir des données. Ici, l'envoi est désactivé pour la démonstration.

```html
<form>
  <label for="nom-demo">Nom :</label>
  <input id="nom-demo" name="nom" type="text" placeholder="Votre nom">
  <button type="button">Valider</button>
</form>
```

**Rendu :**

<form><label for="nom-demo">Nom : </label><input id="nom-demo" name="nom" type="text" placeholder="Votre nom"> <button type="button">Valider</button></form>

## Cases à cocher et boutons radio : `<input>`

`checkbox` autorise plusieurs choix ; `radio` un seul choix par groupe.

```html
<label><input type="checkbox"> HTML</label>
<label><input type="checkbox"> CSS</label>
<label><input type="radio" name="niveau" value="debutant"> Débutant</label>
<label><input type="radio" name="niveau" value="avance"> Avancé</label>
```

**Rendu :**

<div><label><input type="checkbox"> HTML</label> <label><input type="checkbox"> CSS</label></div>
<div><label><input type="radio" name="niveau" value="debutant"> Débutant</label> <label><input type="radio" name="niveau" value="avance"> Avancé</label></div>

## Liste déroulante : `<select>` et `<option>`

Propose plusieurs valeurs dans un menu.

```html
<label for="langage-demo">Langage :</label>
<select id="langage-demo">
  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>
</select>
```

**Rendu :**

<label for="langage-demo">Langage : </label><select id="langage-demo"><option>HTML</option><option>CSS</option><option>JavaScript</option></select>

## Zone de texte : `<textarea>`

Permet de saisir plusieurs lignes.

```html
<label for="message-demo">Message :</label>
<textarea id="message-demo" rows="3" cols="30"
  placeholder="Votre message"></textarea>
```

**Rendu :**

<div><label for="message-demo">Message : </label><textarea id="message-demo" rows="3" cols="30" placeholder="Votre message"></textarea></div>

## Détails dépliables : `<details>` et `<summary>`

Affiche ou masque un contenu sans JavaScript.

```html
<details>
  <summary>Afficher la réponse</summary>
  <p>HTML signifie HyperText Markup Language.</p>
</details>
```

**Rendu :**

<details><summary>Afficher la réponse</summary><p>HTML signifie HyperText Markup Language.</p></details>

## Citation : `<blockquote>`

Signale une citation en bloc.

```html
<blockquote>Le Web est fait pour être accessible à tous.</blockquote>
```

**Rendu :**

<blockquote>Le Web est fait pour être accessible à tous.</blockquote>

## Code préformaté : `<pre>`

Conserve les espaces et retours à la ligne.

```html
<pre>ligne 1
    ligne 2 indentée</pre>
```

**Rendu :**

<pre>ligne 1
    ligne 2 indentée</pre>

## Audio : `<audio>`

Affiche un lecteur audio. Le fichier doit exister dans le dossier `public/medias` du projet Astro.

```html
<audio controls src="/medias/exemple.mp3"></audio>
```

**Rendu (lecteur sans fichier tant que le média n'est pas ajouté) :**

<audio controls preload="none" src="/medias/exemple.mp3"></audio>

## Vidéo : `<video>`

Affiche un lecteur vidéo. Le fichier doit exister dans `public/medias`.

```html
<video controls width="320" src="/medias/exemple.mp4"></video>
```

**Rendu (lecteur sans fichier tant que le média n'est pas ajouté) :**

<video controls preload="none" width="320" src="/medias/exemple.mp4"></video>

## Commentaire : `<!-- ... -->`

Ajoute une note invisible dans le rendu de la page.

```html
<!-- Ceci est un commentaire -->
<p>Texte visible.</p>
```

**Rendu :**

<!-- Ceci est un commentaire -->
<p>Texte visible.</p>

---

## À retenir

- **HTML** : structure et sens du contenu.
- **CSS** : apparence et mise en page.
- **JavaScript** : interactions et comportements.
- Les attributs comme `href`, `src`, `alt`, `id` et `type` précisent le fonctionnement des éléments.
- Dans Astro, le HTML brut inséré dans un fichier `.md` est rendu dans la page, sous réserve des styles et de la configuration du projet.
