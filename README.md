# Hallownest Explorer

Aplicativo mobile desenvolvido com Expo e React Native para explorar as areas, mapas e personagens do universo de Hallownest.

## Funcionalidades

- Lista de areas de Hallownest na tela inicial.
- Detalhes das areas com descricao, imagem e curiosidades.
- Lista de mapas com nome, tipo, caracteristicas e busca.
- Detalhes dos mapas com imagem e informacoes da regiao.
- Lista de personagens com imagem, tipo e descricao.
- Detalhes dos personagens com habilidades e informacoes adicionais.
- Navegacao por abas entre Home, Personagens e Mapa.
- Suporte para Android, iOS e Web por meio do Expo.

## Tecnologias

- Expo `~54.0.7`
- React `19.1.0`
- React Native `0.81.4`
- React Navigation
- JavaScript e JSX
- Imagens locais em JPG e PNG

## Requisitos

- Node.js instalado.
- npm instalado.
- Expo CLI fornecido pelo projeto via `npx`.
- Expo Go no celular, caso queira testar em um dispositivo fisico.

## Instalacao

Entre na pasta do projeto e instale as dependencias:

```bash
npm install
```

## Execucao

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Tambem e possivel usar os comandos definidos no `package.json`:

```bash
npm run android
npm run ios
npm run web
```

Para abrir no celular, inicie o servidor e leia o QR Code usando o Expo Go. O computador e o celular precisam estar na mesma rede quando a conexao local for utilizada.

Se o aplicativo estiver usando uma versao antiga do bundle, limpe o cache:

```bash
npx expo start -c
```

## Estrutura do projeto

```text
expo_hollow-main/
├── App.js
├── index.js
├── app.json
├── package.json
├── assets/
│   └── imagens/
└── components/
    ├── Home.js
    ├── HomeList.js
    ├── Detalhes.js
    ├── Mapa.js
    ├── DetalhesMapa.js
    ├── Personagens.js
    └── DetalhesPersonagem.js
```

## Navegacao

A navegacao principal esta configurada em `App.js`:

- Um `Native Stack Navigator` controla a tela principal e as telas de detalhes.
- Um `Bottom Tab Navigator` controla as abas `Home`, `Personagens` e `Mapa`.
- `Home.js` possui um stack interno para a lista de areas e seus detalhes.
- `Mapa.js` abre `DetalhesMapa` passando o mapa selecionado.
- `Personagens.js` abre `DetalhesPersonagem` passando o personagem selecionado.

## Imagens

As imagens sao carregadas como assets locais usando `require`, por exemplo:

```js
<Image source={require('../assets/imagens/kni.png')} />
```

Os arquivos ficam em `assets/imagens`. Ao adicionar uma nova imagem, use um caminho relativo correto e mantenha o nome do arquivo com a mesma capitalizacao usada no codigo, especialmente para builds Android.

## Principais arquivos

- `App.js`: configura o navigator raiz, as abas e as telas de detalhes.
- `components/Home.js`: configura a navegacao interna da Home.
- `components/HomeList.js`: lista as areas de Hallownest.
- `components/Detalhes.js`: exibe os detalhes das areas.
- `components/Mapa.js`: lista e filtra os mapas.
- `components/DetalhesMapa.js`: exibe os detalhes do mapa selecionado.
- `components/Personagens.js`: lista os personagens.
- `components/DetalhesPersonagem.js`: exibe os detalhes do personagem selecionado.
- `app.json`: define as configuracoes do Expo, como nome, orientacao, icones e splash screen.
- `index.js`: registra o componente principal no Expo.

## Validacao do bundle

Para verificar se os imports e assets estao sendo resolvidos para Android:

```bash
npx expo export --platform android
```

O comando gera temporariamente a pasta `dist`. Ela pode ser removida depois da validacao.
