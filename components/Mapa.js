import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const mapas = [
  {
    id: '1',
    nome: 'Pico do Cristal',
    descricao: 'Uma região montanhosa repleta de cristais energéticos e criaturas voadoras.',
    imagem: require('../assets/imagens/mapap.jpg'),
    tipo: 'Área Elevada',
    caracteristicas: 'Cristais, plataformas, desafios aéreos'
  },
  {
    id: '2',
    nome: 'Ermos Fúngicos',
    descricao: 'Floresta de fungos bioluminescentes com atmosfera úmida e tóxica.',
    imagem: require('../assets/imagens/mapae.png'),
    tipo: 'Área Pantanosa',
    caracteristicas: 'Fungos, ácido, plataformas frágeis'
  },
  {
    id: '3',
    nome: 'Borda do Reino',
    descricao: 'A fronteira externa de Hallownest, onde o vento sopra forte.',
    imagem: require('../assets/imagens/mapab.png'),
    tipo: 'Área Fronteiriça',
    caracteristicas: 'Ventos fortes, segredos escondidos'
  },
  {
    id: '4',
    nome: 'Cidade das Lágrimas',
    descricao: 'A capital outrora majestosa, agora inundada por chuva eterna.',
    imagem: require('../assets/imagens/mapac.jpg'),
    tipo: 'Área Urbana',
    caracteristicas: 'Arquitetura real, chuva constante'
  },
  {
    id: '5',
    nome: 'Ninho Profundo',
    descricao: 'Labirinto de teias habitado por aranhas hostis.',
    imagem: require('../assets/imagens/mapan.jpg'),
    tipo: 'Área de Perigo',
    caracteristicas: 'Escuridão, teias, inimigos ágeis'
  }
];

export default function Mapas() {
  const navigation = useNavigation();
  const [busca, setBusca] = useState('');
  const [mapasFiltrados, setMapasFiltrados] = useState(mapas);

  const buscarMapas = () => {
    if (busca.trim() === '') {
      setMapasFiltrados(mapas);
    } else {
      const filtrados = mapas.filter(mapa =>
        mapa.nome.toLowerCase().includes(busca.toLowerCase()) ||
        mapa.tipo.toLowerCase().includes(busca.toLowerCase()) ||
        mapa.caracteristicas.toLowerCase().includes(busca.toLowerCase())
      );
      setMapasFiltrados(filtrados);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesMapa', { mapa: item })}
    >
      <Image source={item.imagem} style={styles.cardImage} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardSubtitle}>{item.tipo}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>{item.descricao}</Text>
        <Text style={styles.cardFeatures}>{item.caracteristicas}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Mapas de Hallownest</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar mapa..."
          placeholderTextColor="#888"
          value={busca}
          onChangeText={setBusca}
          onSubmitEditing={buscarMapas}
        />
        <Pressable style={styles.searchButton} onPress={buscarMapas}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </Pressable>
      </View>
      
      <FlatList
        data={mapasFiltrados}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum mapa encontrado</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a12',
    paddingTop: 20,
  },
  headerTitle: {
    color: '#7d5cff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(125, 92, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'rgba(30, 30, 40, 0.8)',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7d5cff',
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: '#7d5cff',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(30, 30, 40, 0.8)',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#7d5cff',
  },
  cardImage: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
  },
  cardTextContainer: {
    flex: 1,
    padding: 12,
  },
  cardTitle: {
    color: '#7d5cff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#a38bff',
    fontSize: 14,
    marginBottom: 8,
  },
  cardDescription: {
    color: '#ddd',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 8,
  },
  cardFeatures: {
    color: '#aaa',
    fontSize: 12,
    fontStyle: 'italic',
  },
  emptyText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});