import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const personagens = [
  {
    id: '1',
    nome: 'O Cavaleiro',
    descricao: 'O protagonista silencioso da história, um receptáculo vazio.',
    imagem: require('../assets/imagens/kni.png'), 
    tipo: 'Protagonista',
    habilidades: 'Foco (cura), Dash, Salto Duplo, Amuletos'
  },
  {
    id: '2',
    nome: 'Hornet',
    descricao: 'Protetora das Ruínas do Reino, filha do Rei Pálido.',
    imagem: require('../assets/imagens/hor.png'),
    tipo: 'Protetora',
    habilidades: 'Agilidade, Fio, Lança'
  },
  {
    id: '3',
    nome: 'Quirrel',
    descricao: 'Um viajante misterioso com um passado esquecido.',
    imagem: require('../assets/imagens/que.jpg'), 
    tipo: 'Viajante',
    habilidades: 'Sabedoria, Espada afiada'
  },
  {
    id: '4',
    nome: 'Zote, o Poderoso',
    descricao: 'Um guerreiro arrogante que se considera o maior guerreiro.',
    imagem: require('../assets/imagens/zote.jpg'),
    tipo: 'Guerreiro',
    habilidades: 'Discurso interminável, Preceitos'
  },
  {
    id: '5',
    nome: 'Cornifer',
    descricao: 'Cartógrafo que vende mapas de Hallownest.',
    imagem: require('../assets/imagens/cornifer.jpg'),
    tipo: 'Comerciante',
    habilidades: 'Cartografia, Fuga rápida'
  }
];

export default function Personagens() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesPersonagem', { personagem: item })}
    >
      <Image source={item.imagem} style={styles.cardImage} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardSubtitle}>{item.tipo}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>{item.descricao}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Personagens de Hallownest</Text>
      
      <FlatList
        data={personagens}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
  },
});