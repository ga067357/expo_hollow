# Hallownest Explorer

Aplicativo desenvolvido com Expo e React Native para explorar o mundo de Hallownest. O app apresenta areas, mapas e personagens em uma interface com navegacao por abas e telas de detalhes.

## Sobre o projeto

O projeto foi criado para funcionar em Android, iOS e Web. As informacoes e imagens sao mantidas localmente no codigo e nos assets do aplicativo; nao existe servidor ou API externa.

## Funcionalidades

- **Home:** lista areas de Hallownest e abre seus detalhes, descricoes e curiosidades.
- **Mapas:** exibe mapas com nome, tipo, descricao e caracteristicas.
- **Busca de mapas:** filtra os mapas por nome, tipo ou caracteristicas.
- **Personagens:** lista personagens com imagem, categoria e descricao.
- **Detalhes:** apresenta informacoes completas sobre mapas e personagens selecionados.
- **Navegacao:** usa abas inferiores e navegadores em pilha para organizar as telas.
- **Multiplataforma:** pode ser executado no Android, iOS e navegador usando Expo.

## Tecnologias

| Tecnologia | Versao ou uso |
| --- | --- |
| Expo | `~54.0.7` |
| React | `19.1.0` |
| React Native | `0.81.4` |
| React Navigation | Navegacao por pilha e abas |
| JavaScript/JSX | Linguagem do aplicativo |
| JPG e PNG | Imagens locais do projeto |

## Requisitos

- Node.js em uma versao LTS.
- npm.
- Expo Go instalado no celular para testes em dispositivo fisico.
- Android Studio/emulador Android ou Xcode/simulador iOS, caso queira usar emuladores.

## Instalacao

No terminal, acesse a pasta do projeto e instale as dependencias:

```bash
cd expo_hollow-main
npm install
```

## Executando o projeto

Inicie o servidor do Expo:

```bash
npm start
```

Depois escolha uma das opcoes exibidas no terminal ou use diretamente um dos comandos abaixo:

```bash
npm run android
npm run ios
npm run web
```

### Testando no celular

1. Execute `npm start`.
2. Abra o Expo Go no dispositivo.
3. Escaneie o QR Code exibido pelo Expo.
4. Mantenha computador e celular na mesma rede quando estiver usando a conexao local.

Se o app estiver carregando uma versao antiga, reinicie limpando o cache:

```bash
npx expo start -c
```

## Estrutura do projeto

```text
expo_hollow-main/
├── App.js                         # Navegacao raiz e abas principais
├── index.js                       # Ponto de entrada do Expo
├── app.json                       # Configuracao do aplicativo Expo
├── package.json                   # Dependencias e scripts
├── assets/
│   └── imagens/                   # Imagens de mapas e personagens
└── components/
    ├── Home.js                    # Stack interno da tela inicial
    ├── HomeList.js                # Lista de areas
    ├── Detalhes.js                # Detalhes das areas
    ├── Mapa.js                    # Lista e busca de mapas
    ├── DetalhesMapa.js            # Detalhes do mapa selecionado
    ├── Personagens.js             # Lista de personagens
    └── DetalhesPersonagem.js      # Detalhes do personagem selecionado
```

## Como a navegacao funciona

O `App.js` possui dois niveis principais:

1. Um `Native Stack Navigator` controla a tela principal e as telas `DetalhesMapa` e `DetalhesPersonagem`.
2. Um `Bottom Tab Navigator` apresenta as abas `Home`, `Personagens` e `Mapa`.

A Home possui um stack proprio para alternar entre a lista de areas e `Detalhes`. Os cards de mapas e personagens enviam o item selecionado para a respectiva tela de detalhes.

## Imagens e assets

As imagens sao locais e carregadas com `require`:

```js
const imagem = require('../assets/imagens/kni.png');
```

Os arquivos ficam em `assets/imagens`. Ao adicionar ou renomear uma imagem:

- mantenha o caminho relativo correto;
- respeite maiusculas e minusculas no nome do arquivo;
- atualize o `require` correspondente;
- prefira nomes simples, sem espacos ou caracteres especiais.

Esses cuidados sao especialmente importantes em builds Android, que podem tratar a capitalizacao dos caminhos de forma diferente do Windows.

## Scripts disponiveis

| Comando | Funcao |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento do Expo |
| `npm run android` | Inicia o projeto direcionado ao Android |
| `npm run ios` | Inicia o projeto direcionado ao iOS |
| `npm run web` | Inicia a versao para navegador |
| `npx expo start -c` | Inicia o Expo limpando o cache |
| `npx expo export --platform android` | Gera e valida o bundle Android |

## Solucao de problemas

### A tela nao atualiza no celular

Reinicie o servidor limpando o cache:

```bash
npx expo start -c
```

Feche e abra novamente o Expo Go depois de reiniciar o servidor.
