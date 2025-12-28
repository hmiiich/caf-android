import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Identifiants de test
const TEST_EMAIL = 'admin@caftan.com';
const TEST_PASSWORD = 'admin123';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login', 'home', 'profile', 'catalog', 'details'
  const [selectedTab, setSelectedTab] = useState(0); // 0 = Connexion, 1 = Inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCaftan, setSelectedCaftan] = useState(null); // Caftan sélectionné pour les détails

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Veuillez remplir tous les champs');
      setShowError(true);
      return;
    }

    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      setShowError(false);
      setCurrentScreen('home');
      setEmail('');
      setPassword('');
    } else {
      setErrorMessage('Email ou mot de passe incorrect');
      setShowError(true);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Déconnexion',
          style: 'destructive',
          onPress: () => {
            setCurrentScreen('login');
            setEmail('');
            setPassword('');
            setShowError(false);
          },
        },
      ]
    );
  };

  // Écran de connexion
  if (currentScreen === 'login') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            {/* Logo circulaire avec dégradé */}
            <View style={styles.logoContainer}>
              <LinearGradient
                colors={['#E91E63', '#9C27B0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.logo}
              >
                {/* Image du logo */}
                <Image
                  source={require('./assets/images/caftan1.jpg')}
                  style={styles.logoImage}
                  resizeMode="cover"
                />
                {/* Fallback si l'image ne charge pas */}
                <Text style={styles.logoIcon}>🛍️</Text>
              </LinearGradient>
            </View>

            {/* Titre */}
            <Text style={styles.title}>Caftan Location</Text>

            {/* Sous-titre */}
            <Text style={styles.subtitle}>Louez les plus beaux caftans</Text>

            {/* Contrôle segmenté */}
            <View style={styles.segmentedControl}>
              <TouchableOpacity
                style={[
                  styles.segment,
                  selectedTab === 0 && styles.segmentActive,
                ]}
                onPress={() => {
                  setSelectedTab(0);
                  setShowError(false);
                }}
              >
                <Text
                  style={[
                    styles.segmentText,
                    selectedTab === 0 && styles.segmentTextActive,
                  ]}
                >
                  Connexion
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.segment,
                  selectedTab === 1 && styles.segmentActive,
                ]}
                onPress={() => {
                  setSelectedTab(1);
                  setShowError(false);
                }}
              >
                <Text
                  style={[
                    styles.segmentText,
                    selectedTab === 1 && styles.segmentTextActive,
                  ]}
                >
                  Inscription
                </Text>
              </TouchableOpacity>
            </View>

            {/* Alerte d'erreur */}
            {showError && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {errorMessage || 'Erreur de connexion au serveur'}
                </Text>
              </View>
            )}

            {/* Info de test */}
            {!showError && (
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  Email: {TEST_EMAIL}{'\n'}
                  Mot de passe: {TEST_PASSWORD}
                </Text>
              </View>
            )}

            {/* Champ Email */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setShowError(false);
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Champ Mot de passe */}
            <TextInput
              style={[styles.input, styles.inputFocused]}
              placeholder="Mot de passe"
              placeholderTextColor="#BDBDBD"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setShowError(false);
              }}
              secureTextEntry
            />

            {/* Bouton Se connecter avec dégradé */}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#E91E63', '#9C27B0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  {selectedTab === 0 ? 'Se connecter' : "S'inscrire"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Écran d'accueil
  if (currentScreen === 'home') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Caftan Location</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.homeContent}>
            <Text style={styles.welcomeText}>Bienvenue ! 👋</Text>
            <Text style={styles.welcomeSubtext}>
              Explorez notre collection de caftans
            </Text>

            {/* Menu de navigation */}
            <View style={styles.menuGrid}>
              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => setCurrentScreen('catalog')}
              >
                <LinearGradient
                  colors={['#E91E63', '#9C27B0']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.menuCardGradient}
                >
                  <Text style={styles.menuIcon}>👗</Text>
                  <Text style={styles.menuText}>Catalogue</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => setCurrentScreen('profile')}
              >
                <LinearGradient
                  colors={['#9C27B0', '#E91E63']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.menuCardGradient}
                >
                  <Text style={styles.menuIcon}>👤</Text>
                  <Text style={styles.menuText}>Profil</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* Statistiques */}
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>24</Text>
                <Text style={styles.statLabel}>Caftans disponibles</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>En location</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Fonction pour obtenir tous les caftans avec leurs détails complets
  const getAllCaftans = () => [
    { 
      id: 1, 
      name: 'Caftan Traditionnel', 
      rentalPrice: 150,
      purchasePrice: 1200,
      description: 'Un magnifique caftan traditionnel marocain, parfait pour les occasions spéciales. Fabriqué avec des matériaux de qualité supérieure.',
      size: 'Taille unique',
      material: 'Soie et broderie dorée',
      image: require('./assets/images/caftan0.jpg')
    },
    { 
      id: 2, 
      name: 'Caftan Moderne', 
      rentalPrice: 200,
      purchasePrice: 1500,
      description: 'Caftan moderne avec un design contemporain, alliant tradition et modernité. Idéal pour les événements élégants.',
      size: 'S, M, L',
      material: 'Satin et perles',
      image: require('./assets/images/caftan1.jpg')
    },
    { 
      id: 3, 
      name: 'Caftan de Mariage', 
      rentalPrice: 300,
      purchasePrice: 2500,
      description: 'Caftan de mariage somptueux, brodé à la main avec des motifs traditionnels. Une pièce unique pour votre grand jour.',
      size: 'Taille sur mesure',
      material: 'Soie premium et broderie',
      image: require('./assets/images/caftan2.jpg')
    },
    { 
      id: 4, 
      name: 'Caftan Élégant', 
      rentalPrice: 180,
      purchasePrice: 1400,
      description: 'Caftan élégant avec des finitions raffinées. Parfait pour les soirées et événements formels.',
      size: 'S, M, L, XL',
      material: 'Velours et broderie',
      image: require('./assets/images/caftan3.jpg')
    },
    { 
      id: 5, 
      name: 'Caftan Marocain', 
      rentalPrice: 220,
      purchasePrice: 1800,
      description: 'Caftan authentique marocain avec des motifs traditionnels. Une pièce emblématique de la culture marocaine.',
      size: 'M, L',
      material: 'Tissu premium et broderie',
      image: require('./assets/images/caftan4.jpg')
    },
    { 
      id: 6, 
      name: 'Jallaba 2025', 
      rentalPrice: 170,
      purchasePrice: 1300,
      description: 'Jallaba moderne édition 2025, design contemporain avec une touche traditionnelle. Confortable et stylé.',
      size: 'Taille unique',
      material: 'Coton et lin',
      image: require('./assets/images/caftan5.jpg')
    },
    { 
      id: 7, 
      name: 'Caftan Maghrébin', 
      rentalPrice: 190,
      purchasePrice: 1600,
      description: 'Caftan inspiré des traditions maghrébines, avec des motifs uniques. Élégant et raffiné.',
      size: 'S, M, L',
      material: 'Soie et broderie',
      image: require('./assets/images/caftan6.jpg')
    },
    { 
      id: 8, 
      name: 'Collection Sorelle', 
      rentalPrice: 250,
      purchasePrice: 2000,
      description: 'Pièce exclusive de la collection Sorelle. Design luxueux et finitions exceptionnelles.',
      size: 'M, L, XL',
      material: 'Soie premium et perles',
      image: require('./assets/images/caftan7.jpg')
    },
    { 
      id: 9, 
      name: 'Caftan Premium', 
      rentalPrice: 280,
      purchasePrice: 2200,
      description: 'Caftan premium de haute couture, brodé à la main. Une pièce d\'exception pour les occasions les plus importantes.',
      size: 'Taille sur mesure',
      material: 'Soie de luxe et broderie dorée',
      image: require('./assets/images/caftan8.jpg')
    },
  ];

  // Écran de catalogue
  if (currentScreen === 'catalog') {
    const caftans = getAllCaftans();

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setCurrentScreen('home')}>
            <Text style={styles.backButton}>← Retour</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Catalogue</Text>
          <View style={{ width: 80 }} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.catalogContent}>
            {caftans.map((caftan) => (
              <TouchableOpacity 
                key={caftan.id} 
                style={styles.caftanCard}
                activeOpacity={0.7}
                onPress={() => {
                  setSelectedCaftan(caftan);
                  setCurrentScreen('details');
                }}
              >
                <View style={styles.caftanImageContainer}>
                  <Image
                    source={caftan.image}
                    style={styles.caftanImage}
                    resizeMode="cover"
                    onError={(error) => {
                      console.log('Erreur de chargement de l\'image:', error);
                    }}
                  />
                </View>
                <View style={styles.caftanInfo}>
                  <Text style={styles.caftanName}>{caftan.name}</Text>
                  <Text style={styles.caftanPrice}>{caftan.rentalPrice}€/jour</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Écran de détails du caftan
  if (currentScreen === 'details' && selectedCaftan) {
    const handleRent = () => {
      Alert.alert(
        'Location confirmée',
        `Vous avez choisi de louer "${selectedCaftan.name}" pour ${selectedCaftan.rentalPrice}€/jour.`,
        [
          { text: 'Annuler', style: 'cancel' },
          {
            text: 'Confirmer',
            onPress: () => {
              Alert.alert('Succès', 'Votre demande de location a été enregistrée !');
              setCurrentScreen('catalog');
            },
          },
        ]
      );
    };

    const handlePurchase = () => {
      Alert.alert(
        'Achat confirmé',
        `Vous avez choisi d'acheter "${selectedCaftan.name}" pour ${selectedCaftan.purchasePrice}€.`,
        [
          { text: 'Annuler', style: 'cancel' },
          {
            text: 'Confirmer',
            onPress: () => {
              Alert.alert('Succès', 'Votre commande a été enregistrée !');
              setCurrentScreen('catalog');
            },
          },
        ]
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setCurrentScreen('catalog')}>
            <Text style={styles.backButton}>← Retour</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Détails</Text>
          <View style={{ width: 80 }} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.detailsContent}>
            {/* Image principale */}
            <View style={styles.detailsImageContainer}>
              <Image
                source={selectedCaftan.image}
                style={styles.detailsImage}
                resizeMode="cover"
              />
            </View>

            {/* Informations */}
            <View style={styles.detailsInfo}>
              <Text style={styles.detailsName}>{selectedCaftan.name}</Text>
              
              {/* Prix */}
              <View style={styles.priceContainer}>
                <View style={styles.priceBox}>
                  <Text style={styles.priceLabel}>Location</Text>
                  <Text style={styles.priceValue}>{selectedCaftan.rentalPrice}€/jour</Text>
                </View>
                <View style={styles.priceBox}>
                  <Text style={styles.priceLabel}>Achat</Text>
                  <Text style={styles.priceValue}>{selectedCaftan.purchasePrice}€</Text>
                </View>
              </View>

              {/* Description */}
              <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.detailsDescription}>{selectedCaftan.description}</Text>
              </View>

              {/* Caractéristiques */}
              <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Caractéristiques</Text>
                <View style={styles.characteristicsRow}>
                  <Text style={styles.characteristicLabel}>Taille:</Text>
                  <Text style={styles.characteristicValue}>{selectedCaftan.size}</Text>
                </View>
                <View style={styles.characteristicsRow}>
                  <Text style={styles.characteristicLabel}>Matériau:</Text>
                  <Text style={styles.characteristicValue}>{selectedCaftan.material}</Text>
                </View>
              </View>

              {/* Boutons d'action */}
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.rentButton]}
                  onPress={handleRent}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#E91E63', '#9C27B0']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.actionButtonGradient}
                  >
                    <Text style={styles.actionButtonText}>Louer</Text>
                    <Text style={styles.actionButtonSubtext}>{selectedCaftan.rentalPrice}€/jour</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionButton, styles.purchaseButton]}
                  onPress={handlePurchase}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#9C27B0', '#E91E63']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.actionButtonGradient}
                  >
                    <Text style={styles.actionButtonText}>Acheter</Text>
                    <Text style={styles.actionButtonSubtext}>{selectedCaftan.purchasePrice}€</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Écran de profil
  if (currentScreen === 'profile') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setCurrentScreen('home')}>
            <Text style={styles.backButton}>← Retour</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profil</Text>
          <View style={{ width: 80 }} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.profileContent}>
            <View style={styles.profileHeader}>
              <LinearGradient
                colors={['#E91E63', '#9C27B0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.profileAvatar}
              >
                <Text style={styles.profileAvatarText}>A</Text>
              </LinearGradient>
              <Text style={styles.profileName}>Admin</Text>
              <Text style={styles.profileEmail}>{TEST_EMAIL}</Text>
            </View>

            <View style={styles.profileSection}>
              <Text style={styles.sectionTitle}>Informations</Text>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Téléphone:</Text>
                <Text style={styles.infoValue}>+33 6 12 34 56 78</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Adresse:</Text>
                <Text style={styles.infoValue}>Paris, France</Text>
              </View>
            </View>

            <View style={styles.profileSection}>
              <Text style={styles.sectionTitle}>Mes locations</Text>
              <View style={styles.rentalCard}>
                <Text style={styles.rentalTitle}>Caftan Traditionnel</Text>
                <Text style={styles.rentalDate}>Du 15/01/2024 au 20/01/2024</Text>
                <Text style={styles.rentalStatus}>En cours</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 40,
  },
  content: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  logoIcon: {
    fontSize: 40,
    position: 'absolute',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 32,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 4,
    width: '100%',
    marginBottom: 24,
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  segmentActive: {
    backgroundColor: '#FFFFFF',
  },
  segmentText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#424242',
  },
  segmentTextActive: {
    color: '#9C27B0',
  },
  errorContainer: {
    width: '100%',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  errorText: {
    color: '#C62828',
    fontSize: 14,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  infoText: {
    color: '#1976D2',
    fontSize: 12,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  // Styles pour l'écran d'accueil
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
  },
  backButton: {
    fontSize: 16,
    color: '#9C27B0',
    fontWeight: '500',
  },
  logoutText: {
    fontSize: 16,
    color: '#E91E63',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  homeContent: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 8,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 32,
  },
  menuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  menuCard: {
    width: '48%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuCardGradient: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  menuIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9C27B0',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#757575',
  },
  // Styles pour le catalogue
  catalogContent: {
    padding: 20,
  },
  caftanCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  caftanImageContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
    overflow: 'hidden',
  },
  caftanImage: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 80,
    marginBottom: 8,
  },
  imagePlaceholderLabel: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
  },
  caftanInfo: {
    padding: 16,
  },
  caftanName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 4,
  },
  caftanPrice: {
    fontSize: 16,
    color: '#9C27B0',
    fontWeight: '600',
  },
  // Styles pour le profil
  profileContent: {
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileAvatarText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#757575',
  },
  profileSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#757575',
  },
  infoValue: {
    fontSize: 16,
    color: '#424242',
    fontWeight: '500',
  },
  rentalCard: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  rentalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 8,
  },
  rentalDate: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  rentalStatus: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  // Styles pour la page de détails
  detailsContent: {
    flex: 1,
  },
  detailsImageContainer: {
    width: '100%',
    height: 350,
    backgroundColor: '#F5F5F5',
  },
  detailsImage: {
    width: '100%',
    height: '100%',
  },
  detailsInfo: {
    padding: 20,
  },
  detailsName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  priceBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9C27B0',
  },
  detailsSection: {
    marginBottom: 24,
  },
  detailsDescription: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 24,
  },
  characteristicsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  characteristicLabel: {
    fontSize: 16,
    color: '#757575',
    fontWeight: '500',
  },
  characteristicValue: {
    fontSize: 16,
    color: '#424242',
  },
  actionButtons: {
    marginTop: 24,
    gap: 12,
  },
  actionButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  actionButtonGradient: {
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  actionButtonSubtext: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
});
