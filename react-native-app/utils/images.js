// Configuration des images depuis le dossier photodev
// Vous pouvez modifier ces chemins selon l'emplacement de vos images

export const IMAGE_PATHS = {
  // Images du catalogue
  caftan1: '../photodev/#caftan.jpg',
  caftan2: '../photodev/@LEFILBLANCOFF.jpg',
  caftan3: '../photodev/Sorelle • Heirloom Collection A luminous piece….jpg',
  caftan4: '../photodev/Sorelle • Heirloom Collection Sorelle in Imperial….jpg',
  caftan5: '../photodev/A Moroccan woman wearing a caftan is a traditional….jpg',
  caftan6: '../photodev/#jallaba2025,#….jpg',
  caftan7: '../photodev/Morocco • Algeria • Tunisia • Libya.jpg',
  caftan8: '../photodev/Piece of chocolate 🍫🤎 Model @ahlam_elmaaizi….jpg',
  
  // Logo
  logo: '../photodev/@LEFILBLANCOFF.jpg',
};

// Fonction helper pour obtenir l'URI de l'image
export const getImageUri = (imageKey) => {
  return IMAGE_PATHS[imageKey] || null;
};

// Liste des caftans avec leurs images
export const CAFTANS_DATA = [
  { 
    id: 1, 
    name: 'Caftan Traditionnel', 
    price: '150€/jour', 
    image: IMAGE_PATHS.caftan1
  },
  { 
    id: 2, 
    name: 'Caftan Moderne', 
    price: '200€/jour', 
    image: IMAGE_PATHS.caftan2
  },
  { 
    id: 3, 
    name: 'Caftan de Mariage', 
    price: '300€/jour', 
    image: IMAGE_PATHS.caftan3
  },
  { 
    id: 4, 
    name: 'Caftan Élégant', 
    price: '180€/jour', 
    image: IMAGE_PATHS.caftan4
  },
  { 
    id: 5, 
    name: 'Caftan Marocain', 
    price: '220€/jour', 
    image: IMAGE_PATHS.caftan5
  },
  { 
    id: 6, 
    name: 'Jallaba 2025', 
    price: '170€/jour', 
    image: IMAGE_PATHS.caftan6
  },
  { 
    id: 7, 
    name: 'Caftan Maghrébin', 
    price: '190€/jour', 
    image: IMAGE_PATHS.caftan7
  },
  { 
    id: 8, 
    name: 'Collection Sorelle', 
    price: '250€/jour', 
    image: IMAGE_PATHS.caftan8
  },
];


