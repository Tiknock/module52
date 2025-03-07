# Documentation du Projet "Humain"

## Vue d'ensemble

Ce projet implémente un modèle orienté objet représentant un humain avec ses organes et ses vêtements. Il met en œuvre différents types de relations d'héritage, de composition et d'agrégation conformément au diagramme de classes UML.

## Diagramme de Classes

Le projet implémente le diagramme de classes suivant :

```
                 ┌─────────┐
                 │CD-Human │
                 └─────────┘
                      │
                      │
         ┌────────────┼────────────┐
         │            │            │
         ▼            │            ▼
    ┌─────────┐       │       ┌─────────┐
    │Vêtement │◄──────┼───────│ Organe  │
    └─────────┘       │       └─────────┘
         ▲            │            ▲
         │            │            │
         │            ▼            │
    ┌─────────┐   ┌─────────┐  ┌─────────┐
    │Chemise  │   │ Humain  │  │  Coeur  │
    └─────────┘   └─────────┘  └─────────┘
```

### Relations
- **Héritage** : Chemise hérite de Vêtement, Coeur hérite d'Organe
- **Composition** : Un Humain possède des Organes (relation forte, l'organe ne peut exister sans l'humain)
- **Agrégation** : Un Humain peut avoir des greffes d'Organes (relation faible, l'organe peut exister sans l'humain)

## Structure des Classes

### Classe `Humain`
- **Attributs** : 
  - `#organes` : tableau d'Organe (composition)
  - `#greffes` : tableau d'Organe (agrégation)
  - `#vetements` : tableau de Vêtement
  - `#nom` : nom de l'humain
- **Méthodes** :
  - `ajouterOrgane(organe)` : ajoute un organe naturel à l'humain
  - `supprimerOrgane(organe)` : retire un organe de l'humain
  - `getCoeur()` : récupère le coeur de l'humain
  - `ajouterGreffe(organe)` : ajoute une greffe d'organe
  - `ajouterVetement(vetement)` : fait porter un vêtement à l'humain

### Classe `Organe`
- **Attributs** : 
  - `#humain` : référence à l'humain propriétaire
  - `#nom` : nom de l'organe
- **Méthodes** :
  - `setHumain(humain)` : définit l'humain propriétaire
  - `getHumain()` : récupère l'humain propriétaire
  - `getNom()` : récupère le nom de l'organe

### Classe `Coeur` (hérite d'Organe)
- Spécialisation d'Organe sans méthodes supplémentaires

### Classe `Vetement`
- Classe de base pour tous les types de vêtements

### Classe `Chemise` (hérite de Vêtement)
- Spécialisation de Vêtement sans méthodes supplémentaires

## Exemples d'utilisation

Le fichier `main.js` démontre :
1. La création de deux humains (Alice et Bob)
2. L'ajout d'organes à chaque humain
3. La greffe du coeur d'Alice vers Bob
4. L'ajout d'une chemise à Bob

## Structure des fichiers
- `humain.js` : Implémentation de la classe Humain
- `organe.js` : Implémentation de la classe Organe
- `coeur.js` : Implémentation de la classe Coeur
- `vetement.js` : Implémentation de la classe Vetement
- `chemise.js` : Implémentation de la classe Chemise
- `main.js` : Script de démonstration

## Exécution
Pour exécuter le projet :
```
node main.js
``` 