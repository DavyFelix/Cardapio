import { Image, StyleSheet, Button } from 'react-native';
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
        {/* Passando a função de navegação para o evento onPress */}
        <Button title="Ir para Login" onPress={navigateToLogin} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
