import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const imagensPersonagens = {
  '1': require('../assets/imagens/kni.png'),
  '2': require('../assets/imagens/hor.png'),
  '3': require('../assets/imagens/que.jpg'),
  '4': require('../assets/imagens/zote.jpg'),
  '5': require('../assets/imagens/cornifer.jpg'),
};

export default function DetalhesPersonagem({ route }) {
  const { personagem } = route.params;
  const imagem = imagensPersonagens[personagem.id];

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.title}>{personagem.nome}</Text>
      <View style={styles.imageFrame}>
        <Image source={imagem} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.type}>{personagem.tipo}</Text>
      <Text style={styles.text}>{personagem.descricao}</Text>
      <Text style={styles.label}>Habilidades</Text>
      <Text style={styles.text}>{personagem.habilidades}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  container: { flexGrow: 1, width: '100%', padding: 16 },
  title: { color: '#7d5cff', fontSize: 28, fontWeight: '800', marginBottom: 16, textAlign: 'center' },
  imageFrame: { width: '100%', height: 280, marginBottom: 16, borderRadius: 8, overflow: 'hidden', backgroundColor: '#1e1e28', alignItems: 'center', justifyContent: 'center' },
  image: { width: '100%', height: '100%', transform: [{ translateX: 8 }] },
  type: { color: '#b9aaff', fontSize: 16, fontWeight: '700', marginBottom: 12 },
  label: { color: '#7d5cff', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  text: { color: '#fff', fontSize: 16, lineHeight: 24, marginBottom: 20 },
});