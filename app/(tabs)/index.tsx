// HomeScreen.tsx
import { FlatList, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react'; // Caminho corrigido para importação correta
import { Produto } from 'D:/falcudade/CardapioReact/Cardapio/models/produtos';  // Certifique-se de que a importação está correta
import axios from 'axios';

export default function HomeScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get('http://192.168.0.52:3000/api/lanches'); // Use o IP do seu servidor
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo ao Cardápio</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Agora funcional e melhorado!</ThemedText>
      </ThemedView>

      <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.title}>Cardápio</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : produtos.length === 0 ? (
        <Text style={styles.noData}>Nenhum produto disponível.</Text>
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.nome || 'Nome indisponível'}</Text>
              <Text style={styles.cardDescription}>{item.tipo || 'Descrição indisponível'}</Text>
            </View>
          )}
        />
      )}
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  noData: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});
