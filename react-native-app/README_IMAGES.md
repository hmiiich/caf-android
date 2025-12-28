# Guide d'utilisation des images

## Structure des images

Les images sont stockées dans le dossier `photodev` à la racine du projet.

## Configuration

### Option 1 : Utiliser les images depuis photodev (actuel)
Les chemins sont configurés pour pointer vers `../photodev/` depuis le dossier `react-native-app`.

### Option 2 : Copier les images dans assets/images
Pour une meilleure organisation, vous pouvez copier les images :

```bash
# Depuis le dossier react-native-app
mkdir -p assets/images
cp ../photodev/*.jpg assets/images/
```

Puis modifier `utils/images.js` pour utiliser `require()` :

```javascript
export const IMAGE_PATHS = {
  caftan1: require('./assets/images/caftan.jpg'),
  // ...
};
```

### Option 3 : Utiliser des URLs distantes
Si vos images sont hébergées en ligne :

```javascript
export const IMAGE_PATHS = {
  caftan1: 'https://votre-domaine.com/images/caftan.jpg',
  // ...
};
```

## Ajouter de nouvelles images

1. Ajoutez l'image dans le dossier `photodev`
2. Ajoutez le chemin dans `utils/images.js` :
   ```javascript
   export const IMAGE_PATHS = {
     // ...
     nouvelleImage: '../photodev/nouvelle-image.jpg',
   };
   ```
3. Utilisez-la dans votre composant :
   ```javascript
   <Image source={{ uri: IMAGE_PATHS.nouvelleImage }} />
   ```

## Notes importantes

- Les chemins relatifs (`../photodev/`) fonctionnent pour le développement
- Pour la production, utilisez `require()` ou des URLs absolues
- Les noms de fichiers avec des caractères spéciaux peuvent causer des problèmes
- Assurez-vous que les images sont accessibles depuis l'application


