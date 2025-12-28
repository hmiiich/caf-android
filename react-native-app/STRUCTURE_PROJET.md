# Structure du Projet React Native - Caftan Location

## 📁 Vue d'ensemble de tous les fichiers

### 🎯 Fichiers Principaux (Code Source)

#### **App.js** (1054 lignes)
**Contenu :** Le fichier principal de l'application React Native
- **Imports :** React, composants React Native (Text, View, Image, etc.), LinearGradient
- **État de l'application :** Gestion de la navigation entre écrans (login, home, catalog, details, profile)
- **Fonctionnalités :**
  - Écran de connexion/inscription avec validation
  - Écran d'accueil avec menu de navigation
  - Catalogue de caftans avec images
  - Page de détails pour chaque caftan
  - Options d'achat et de location
  - Page de profil utilisateur
- **Données :** 9 caftans avec leurs détails (nom, prix, description, taille, matériau, images)
- **Styles :** Tous les styles CSS de l'application (StyleSheet.create)

#### **index.js** (8 lignes)
**Contenu :** Point d'entrée de l'application Expo
- Enregistre le composant App comme composant racine
- Utilise `registerRootComponent` d'Expo
- Assure la compatibilité avec Expo Go et les builds natifs

---

### ⚙️ Fichiers de Configuration

#### **package.json** (26 lignes)
**Contenu :** Configuration npm et dépendances du projet
- **Nom :** CaftanLocation
- **Version :** 1.0.0
- **Scripts :**
  - `npm start` : Lance Expo
  - `npm run android` : Lance sur Android
  - `npm run ios` : Lance sur iOS
  - `npm run web` : Lance sur Web
- **Dépendances principales :**
  - `expo` (~49.0.0) : Framework Expo
  - `expo-linear-gradient` : Pour les dégradés
  - `react` (18.2.0) : Bibliothèque React
  - `react-native` (0.72.10) : Framework React Native
  - `react-native-safe-area-context` : Gestion des zones sûres
  - `react-native-screens` : Optimisation des écrans

#### **app.json** (24 lignes)
**Contenu :** Configuration Expo pour l'application
- **Nom de l'app :** "Caftan Location"
- **Slug :** caftan-location
- **Version :** 1.0.0
- **Orientation :** Portrait uniquement
- **Interface :** Mode clair
- **Splash screen :** Configuration du écran de démarrage
- **Plateformes :** iOS et Android configurés

#### **babel.config.js** (6 lignes)
**Contenu :** Configuration Babel pour la transpilation du code
- Utilise le preset `babel-preset-expo`
- Cache activé pour améliorer les performances
- Transforme le code JSX/ES6+ en JavaScript compatible

---

### 📚 Fichiers de Documentation

#### **README.md** (111 lignes)
**Contenu :** Documentation principale du projet
- Description de l'application
- Instructions d'installation
- Guide de lancement
- Structure du projet
- Technologies utilisées
- Notes importantes

#### **CHANGELOG.md** (46 lignes)
**Contenu :** Historique des corrections apportées
- Liste des problèmes résolus
- Corrections des dépendances
- Améliorations du code
- État actuel du projet

#### **GUIDE_IMAGES.md** (151 lignes)
**Contenu :** Guide détaillé pour gérer les images
- Méthodes pour copier les images
- Instructions pour utiliser require()
- Exemples de code
- Liste des images disponibles
- Solutions de dépannage

#### **README_IMAGES.md** (62 lignes)
**Contenu :** Guide rapide d'utilisation des images
- Structure des images
- Options de configuration
- Comment ajouter de nouvelles images
- Notes importantes

---

### 🛠️ Fichiers Utilitaires

#### **utils/images.js** (76 lignes)
**Contenu :** Configuration et helpers pour les images
- **IMAGE_PATHS :** Objet avec tous les chemins d'images
- **getImageUri() :** Fonction helper pour obtenir l'URI d'une image
- **CAFTANS_DATA :** Liste des caftans avec leurs données (non utilisé actuellement, App.js contient les données directement)

#### **copy-images.ps1** (41 lignes)
**Contenu :** Script PowerShell pour automatiser la copie des images
- Copie automatiquement les images depuis `../photodev/` vers `assets/images/`
- Renomme les images avec des noms simples (caftan0.jpg, caftan1.jpg, etc.)
- Affiche des messages de progression
- Gère les erreurs

#### **App-with-gradient.js** (Fichier optionnel)
**Contenu :** Version alternative de App.js
- Utilise `react-native-linear-gradient` au lieu d'Expo LinearGradient
- Peut être utilisé si vous préférez cette bibliothèque

---

### 🖼️ Dossier Assets

#### **assets/images/** (9 fichiers JPG)
**Contenu :** Toutes les images des caftans
- `caftan0.jpg` à `caftan8.jpg` : Images des 9 caftans
- Images copiées depuis le dossier `photodev`
- Utilisées dans le catalogue et la page de détails

---

### 📦 Fichiers Générés Automatiquement

#### **package-lock.json**
**Contenu :** Verrouillage des versions exactes des dépendances
- Généré automatiquement par npm
- Assure la reproductibilité des installations
- Ne pas modifier manuellement

#### **node_modules/**
**Contenu :** Toutes les dépendances installées
- Bibliothèques npm
- Dépendances transitives
- Généré par `npm install`
- Ne pas modifier manuellement

---

## 📊 Résumé par Type de Fichier

| Type | Nombre | Description |
|------|--------|-------------|
| **Code Source** | 2 | App.js, index.js |
| **Configuration** | 3 | package.json, app.json, babel.config.js |
| **Documentation** | 4 | README.md, CHANGELOG.md, GUIDE_IMAGES.md, README_IMAGES.md |
| **Utilitaires** | 2 | utils/images.js, copy-images.ps1 |
| **Images** | 9 | caftan0.jpg à caftan8.jpg |
| **Générés** | 2+ | package-lock.json, node_modules/ |

---

## 🔄 Flux de l'Application

1. **index.js** → Lance l'application
2. **App.js** → Contient toute la logique et l'interface
3. **assets/images/** → Fournit les images
4. **package.json** → Définit les dépendances nécessaires

---

## 📝 Notes Importantes

- **App.js** est le fichier le plus important (1054 lignes)
- Toutes les données des caftans sont dans App.js (fonction `getAllCaftans()`)
- Les images sont chargées avec `require()` depuis `assets/images/`
- La navigation se fait via l'état `currentScreen`
- Les styles sont définis à la fin de App.js avec `StyleSheet.create()`


