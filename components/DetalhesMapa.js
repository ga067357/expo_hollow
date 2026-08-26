import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const imagensMapas = {
  '1': require('../assets/imagens/mapap.jpg'),
  '2': require('../assets/imagens/mapae.png'),
  '3': require('../assets/imagens/mapab.png'),
  '4': require('../assets/imagens/mapac.jpg'),
  '5': require('../assets/imagens/mapan.jpg'),
};

export default function DetalhesMapa({ route }) {
  const { mapa } = route.params;
  const imagem = imagensMapas[mapa.id];

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.title}>{mapa.nome}</Text>
      <View style={styles.imageFrame}>
        <Image source={imagem} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.type}>{mapa.tipo}</Text>
      <Text style={styles.text}>{mapa.descricao}</Text>
      <Text style={styles.label}>Características</Text>
      <Text style={styles.text}>{mapa.caracteristicas}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  container: { flexGrow: 1, width: '100%', padding: 16 },
  title: { color: '#7d5cff', fontSize: 28, fontWeight: '800', marginBottom: 16, textAlign: 'center' },
  imageFrame: { width: '100%', height: 220, marginBottom: 16, borderRadius: 8, overflow: 'hidden', backgroundColor: '#1e1e28', alignItems: 'center', justifyContent: 'center' },
  image: { width: '100%', height: '100%', transform: [{ translateX: 8 }] },
  type: { color: '#b9aaff', fontSize: 16, fontWeight: '700', marginBottom: 12 },
  label: { color: '#7d5cff', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  text: { color: '#fff', fontSize: 16, lineHeight: 24, marginBottom: 20 },
});
