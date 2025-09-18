// components/HomeList.js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const areas = [
  { key: 'CidadeDasLagrimas', nome: 'Cidade das Lágrimas' },
  { key: 'ErmosFungicos', nome: 'Ermos Fúngicos' },
  { key: 'PicoDoCristal', nome: 'Pico de Cristal' },
  { key: 'CaminhoVerde', nome: 'Caminho Verde' },
  { key: 'NinhoProfundo', nome: 'Ninho Profundo' },
  { key: 'BordaDoReino', nome: 'Borda do Reino' },
];

export default function HomeList() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate('Detalhes', { area: item.nome, key: item.key })
      }
    >
      <Text style={styles.cardText}>{item.nome}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Áreas de Hallownest:</Text>
      <FlatList
        data={areas}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a12',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#7d5cff',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(125, 92, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  card: {
    backgroundColor: 'rgba(30, 30, 40, 0.8)',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#7d5cff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#7d5cff',
  },
  cardText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});