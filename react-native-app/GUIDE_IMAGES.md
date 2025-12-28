# Guide pour ajouter les images depuis le dossier photodev

## Méthode recommandée : Copier les images dans assets/images

### Étape 1 : Copier les images

Depuis le dossier `react-native-app`, exécutez :

**Windows (PowerShell):**
```powershell
Copy-Item ..\photodev\*.jpg assets\images\
```

**Linux/Mac:**
```bash
cp ../photodev/*.jpg assets/images/
```

### Étape 2 : Modifier App.js pour utiliser les images

Une fois les images copiées, vous avez deux options :

#### Option A : Utiliser require() (recommandé pour les images locales)

Modifiez la section du catalogue dans `App.js` :

```javascript
const caftans = [
  { 
    id: 1, 
    name: 'Caftan Traditionnel', 
    price: '150€/jour', 
    image: require('./assets/images/#caftan.jpg')
  },
  // ... etc
];
```

Et dans le composant Image :
```javascript
<Image
  source={caftan.image}
  style={styles.caftanImage}
  resizeMode="cover"
/>
```

#### Option B : Utiliser des chemins file:// (pour développement)

Si vous gardez les images dans photodev, utilisez des chemins absolus :

```javascript
const caftans = [
  { 
    id: 1, 
    name: 'Caftan Traditionnel', 
    price: '150€/jour', 
    image: 'file:///C:/Users/pc/Desktop/test/photodev/#caftan.jpg'
  },
  // ... etc
];
```

**Note:** Les chemins file:// ne fonctionnent que sur Android et iOS, pas sur le web.

### Étape 3 : Renommer les fichiers (optionnel mais recommandé)

Les noms de fichiers avec des caractères spéciaux peuvent causer des problèmes. Renommez-les :

- `#caftan.jpg` → `caftan1.jpg`
- `@LEFILBLANCOFF.jpg` → `caftan2.jpg`
- etc.

## Structure finale recommandée

```
react-native-app/
├── assets/
│   └── images/
│       ├── caftan1.jpg
│       ├── caftan2.jpg
│       ├── caftan3.jpg
│       └── ...
├── App.js
└── ...
```

## Exemple de code complet

```javascript
// Dans App.js, section catalogue
const caftans = [
  { 
    id: 1, 
    name: 'Caftan Traditionnel', 
    price: '150€/jour', 
    image: require('./assets/images/caftan1.jpg')
  },
  { 
    id: 2, 
    name: 'Caftan Moderne', 
    price: '200€/jour', 
    image: require('./assets/images/caftan2.jpg')
  },
  // ... etc
];

// Dans le rendu
{caftans.map((caftan) => (
  <TouchableOpacity key={caftan.id} style={styles.caftanCard}>
    <View style={styles.caftanImageContainer}>
      <Image
        source={caftan.image}
        style={styles.caftanImage}
        resizeMode="cover"
      />
    </View>
    <View style={styles.caftanInfo}>
      <Text style={styles.caftanName}>{caftan.name}</Text>
      <Text style={styles.caftanPrice}>{caftan.price}</Text>
    </View>
  </TouchableOpacity>
))}
```

## Images disponibles dans photodev

1. `#caftan.jpg`
2. `@LEFILBLANCOFF.jpg`
3. `#jallaba2025,#….jpg`
4. `A Moroccan woman wearing a caftan is a traditional….jpg`
5. `Morocco • Algeria • Tunisia • Libya (1).jpg`
6. `Morocco • Algeria • Tunisia • Libya.jpg`
7. `Piece of chocolate 🍫🤎 Model @ahlam_elmaaizi….jpg`
8. `Sorelle • Heirloom Collection A luminous piece….jpg`
9. `Sorelle • Heirloom Collection Sorelle in Imperial….jpg`

## Dépannage

### Les images ne s'affichent pas
1. Vérifiez que les fichiers existent dans `assets/images/`
2. Vérifiez les chemins dans le code
3. Redémarrez l'application avec `npm start`
4. Vérifiez la console pour les erreurs

### Erreur "Cannot find module"
- Utilisez `require()` pour les images locales
- Vérifiez que les chemins sont corrects
- Les chemins sont relatifs au fichier App.js


