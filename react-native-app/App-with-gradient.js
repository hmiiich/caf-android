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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0); // 0 = Connexion, 1 = Inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(true); // Afficher l'erreur par défaut

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
              onPress={() => setSelectedTab(0)}
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
              onPress={() => setSelectedTab(1)}
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
                Erreur de connexion au serveur
              </Text>
            </View>
          )}

          {/* Champ Email */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Champ Mot de passe */}
          <TextInput
            style={[styles.input, styles.inputFocused]}
            placeholder="Mot de passe"
            placeholderTextColor="#BDBDBD"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Bouton Se connecter avec dégradé */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              // Action de connexion
            }}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#E91E63', '#9C27B0']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Se connecter</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
  },
  logoIcon: {
    fontSize: 40,
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
});

