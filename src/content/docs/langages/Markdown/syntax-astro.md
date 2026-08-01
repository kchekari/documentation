---
title: "Astro - Syntax"
tableOfContents: false
sidebar:
  label: "Astro - Syntax"
---
## Styles d'écritures
#### Modification du texte
Le texte peut être en **gras**, en _italique_, ou ~~barré~~.
```markdown
Le texte peut être en **gras**, en _italique_, ou ~~barré~~.
```
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
```markdown
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
```
## Encarts
:::note
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
:::
```markdown
:::note
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
:::
```
:::tip
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
:::
```markdown
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
```
:::caution
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
:::
```markdown
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
```
:::danger
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
:::
```markdown
Vous pouvez mettre en évidence le code incorporé au texte en utilisant des accents graves.
```
:::tip[Le saviez-vous ?]
Astro vous aide à construire des sites Web plus rapides grâce à [« l'Architecture en îlots »](https://docs.astro.build/fr/concepts/islands/).
:::
```markdown
:::tip[Le saviez-vous ?]
Astro vous aide à construire des sites Web plus rapides grâce à [« l'Architecture en îlots »](https://docs.astro.build/fr/concepts/islands/).
:::
```
:::tip{icon="heart"}
Astro contient des icones [lien](https://starlight.astro.build/fr/reference/icons/#toutes-les-ic%C3%B4nes)
:::
```markdown
:::tip{icon="heart"}
Astro contient des icones https://starlight.astro.build/fr/reference/icons/#toutes-les-ic%C3%B4nes
:::
```

## Détails

```markdown
<details>
<summary>Où et quand la constellation d'Andromède est-elle la plus visible ?</summary>

La [constellation d'Andromède](<https://fr.wikipedia.org/wiki/Androm%C3%A8de_(constellation)>) est la plus visible dans le ciel nocturne pendant le mois de novembre aux latitudes comprises entre `+90°` et `−40°`.

</details>
```
<details>
<summary>Où et quand la constellation d'Andromède est-elle la plus visible ?</summary>

Le ciel nocturne pendant le mois de novembre aux latitudes comprises entre `+90°` et `−40°`.

</details>
