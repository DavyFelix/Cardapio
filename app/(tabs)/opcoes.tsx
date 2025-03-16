import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();  // Usando o router aqui corretamente

  // Função de navegação para o login
  const navigateToLogin = () => {
    router.push('/login');  // Navegar para a tela de login
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/settings.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Configurações</ThemedText>
      </ThemedView>

      {/* Container para o botão */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
          <Text style={styles.buttonText}>Ir para Login</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 30, // Espaçamento entre título e botão
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonContainer: {
    alignItems: 'center', // Centralizar o botão
    marginTop: 40, // Ajuste do espaçamento entre o título e o botão
    marginHorizontal: 20, // Deixa o botão afastado das bordas
  },
  button: {
    backgroundColor: '#007BFF', // Cor de fundo azul para o botão
    borderRadius: 30, // Borda bem arredondada
    paddingVertical: 15, // Aumenta a altura do botão
    paddingHorizontal: 30, // Dá mais largura ao botão
    width: '80%', // Controla o tamanho do botão
    alignItems: 'center', // Centraliza o texto dentro do botão
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 }, // Sombra no iOS
    shadowOpacity: 0.2, // Transparência da sombra
    shadowRadius: 5, // Raio da sombra no iOS
  },
  buttonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 18, // Tamanho do texto
    fontWeight: 'bold', // Texto em negrito
  },
});
