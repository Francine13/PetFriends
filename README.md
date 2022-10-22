# Pet Friends - Como executar
 
# Clone o repositório
$ git clone https://github.com/Francine13/PetFriends

# Entre na pasta do projeto
$ cd PetFriends

# Instale as dependências
$ yarn

ATENÇÃO

Será necessário entrar no arquivo

     node_modules/react-native/index.js
   
SUBSTITUIR AS LINHAS 437 ATÉ 464 PELO SEGUINTE CODIGO:

     get ColorPropType(): $FlowFixMe {
       console.warn('');
       return require('deprecated-react-native-prop-types').ColorPropType;
     },

     get EdgeInsetsPropType(): $FlowFixMe {
       console.warn('');
       return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
     },

     get PointPropType(): $FlowFixMe {
       console.warn('');
       return require('deprecated-react-native-prop-types').PointPropType;
     },

     get ViewPropTypes(): $FlowFixMe {
       console.warn('');
       return require('deprecated-react-native-prop-types').ViewPropTypes;
     },
# Execute a aplicação
$ expo start

Para visualizar a aplicação basta selecionar a opção "a" ou efetuar a leitura do QRCode pelo aplicativo do EXPO.
