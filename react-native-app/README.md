# Caftan Location - Application React Native

Une application React Native avec une interface de connexion/inscription moderne pour la location de caftans.

## Fonctionnalités

- **Interface de connexion/inscription** : Design moderne avec dégradés rose/violet
- **Contrôle segmenté** : Basculer entre Connexion et Inscription
- **Gestion des erreurs** : Affichage des messages d'erreur
- **Champs de formulaire** : Email et mot de passe avec validation

## Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Expo CLI installé globalement : `npm install -g expo-cli`

### Étapes d'installation

1. Naviguez vers le dossier du projet :
   ```bash
   cd react-native-app
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. Pour utiliser les dégradés, installez la bibliothèque :
   ```bash
   npm install react-native-linear-gradient
   ```
   ou
   ```bash
   yarn add react-native-linear-gradient
   ```

4. Si vous utilisez `react-native-linear-gradient`, vous devrez également lier la bibliothèque native :
   ```bash
   cd ios && pod install && cd .. # Pour iOS
   ```

## Lancement de l'application

### Avec Expo

```bash
npm start
```
ou
```bash
expo start
```

Ensuite, scannez le QR code avec l'application Expo Go sur votre téléphone, ou appuyez sur :
- `a` pour Android
- `i` pour iOS
- `w` pour Web

### Sans Expo (React Native CLI)

Si vous préférez utiliser React Native CLI au lieu d'Expo, vous devrez :

1. Modifier `package.json` pour utiliser React Native standard
2. Créer les dossiers `android/` et `ios/` avec `react-native init`
3. Copier le code de `App.js` dans le nouveau projet

## Structure du projet

```
react-native-app/
├── App.js                    # Composant principal avec l'interface
├── App-with-gradient.js      # Version avec LinearGradient (optionnel)
├── package.json              # Dépendances et scripts
├── app.json                  # Configuration Expo
├── babel.config.js           # Configuration Babel
└── README.md                 # Documentation
```

## Interface

L'application comprend :

1. **Logo circulaire** : Avec dégradé rose/violet
2. **Titre** : "Caftan Location"
3. **Sous-titre** : "Louez les plus beaux caftans"
4. **Contrôle segmenté** : Connexion/Inscription
5. **Alerte d'erreur** : Message d'erreur avec fond rose clair
6. **Champs de saisie** : Email et Mot de passe
7. **Bouton** : "Se connecter" avec dégradé rose à violet

## Notes

- Le fichier `App.js` utilise une version simplifiée sans dégradé (couleurs unies)
- Le fichier `App-with-gradient.js` utilise `react-native-linear-gradient` pour les vrais dégradés
- Pour une meilleure expérience visuelle, utilisez `App-with-gradient.js` et renommez-le en `App.js`

## Technologies utilisées

- React Native 0.72.6
- Expo ~49.0.0
- react-native-linear-gradient (optionnel pour les dégradés)

