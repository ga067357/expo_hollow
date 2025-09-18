import React, { useEffect, useRef } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Animated,
  View,
} from 'react-native';

const areasHallownest = {
  CidadeDasLagrimas: {
    img: require('../assets/imagens/cidade.jpg'),
    descricao:
      'A Cidade das Lágrimas é o coração de Hallownest, outrora uma metrópole próspera. Agora está em ruínas, com chuva eterna caindo através do teto de cristal quebrado. Abriga o Palácio Branco e a Fonte do Cavaleiro.',
    curiosidade: 'A chuva constante na área é na verdade ácido que corroi o chão.',
  },
  ErmosFungicos: {
    img: require('../assets/imagens/ermos.jpg'),
    descricao:
      'Os Ermos Fúngicos são uma região úmida e infestada de esporos, onde fungos gigantes crescem descontroladamente. A tribo dos Shrumals habita esta área, vivendo em simbiose com os fungos.',
    curiosidade: 'O Cogumago, chefe desta área, é na verdade um shrumal que foi corrompido pela infecção.',
  },
  PicoDoCristal: {
    img: require('../assets/imagens/pico.jpg'), 
    descricao:
      'O Pico do Cristal é uma montanha brilhante cheia de minerais e cristais energizados. Os cristais emitem luz e energia, e foram explorados pelos mineradores do Reino. A área é perigosa devido aos cristais que disparam raios.',
    curiosidade: 'Os cristais eram usados para alimentar a tecnologia avançada do Rei Pálido.',
  },
  CaminhoVerde: {
    img: require('../assets/imagens/caminho.jpg'),
    descricao:
      'O Caminho Verde é uma área exuberante e vegetativa, com plantas e insetos não infectados. Serve como entrada para Hallownest e abriga a Vila Dirtmouth na superfície. A vegetação aqui é mantida por Unn, a deusa das plantas.',
    curiosidade: 'Esta é uma das poucas áreas que não foi totalmente afetada pela infecção.',
  },
  NinhoProfundo: {
    img: require('../assets/imagens/ninho.jpg'),
    descricao:
      'O Ninho Profundo é uma área escura e perigosa habitada por aranhas e criaturas da teia. A teia de Herrah a Bestia domina a região. É um dos três sonhos que o Cavaleiro deve visitar.',
    curiosidade: 'Hornet, uma personagem importante, é filha de Herrah a Bestia.',
  },
  BordaDoReino: {
    img: require('../assets/imagens/borda.jpg'),
    descricao:
      'A Borda do Reino é uma área ventosa nos limites de Hallownest, cheia de penhascos íngremes e plataformas instáveis. Lar dos vespídeos, incluindo os poderosos soldados da Hive. O estilo arquitetônico difere do resto do reino.',
    curiosidade: 'Esta área contém uma colmeia inteira que pode ser explorada, com seu próprio chefe.',
  },
};

export default function Detalhes({ route }) {
  const { key, area } = route.params;
  const info = areasHallownest[key];

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>{area}</Text>
        <Image
          source={info.img}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>{info.descricao}</Text>
        <View style={styles.curiosityBox}>
          <Text style={styles.curiosityTitle}>Segredo do Viajante:</Text>
          <Text style={styles.curiosityText}>{info.curiosidade}</Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0a0a12',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 16,
    color: '#7d5cff',
    textAlign: 'center',
    textShadowColor: 'rgba(125, 92, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#7d5cff',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
    lineHeight: 22,
    marginBottom: 20,
  },
  curiosityBox: {
    backgroundColor: 'rgba(125, 92, 255, 0.2)',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7d5cff',
    width: '100%',
  },
  curiosityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7d5cff',
    marginBottom: 8,
  },
  curiosityText: {
    fontSize: 14,
    color: '#ddd',
    fontStyle: 'italic',
  },
});