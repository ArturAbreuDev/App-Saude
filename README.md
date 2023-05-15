# Aplicativo Saúde
## (Finalizado) - 03/05/2023
### Este projeto é aplicativo genérico para planos de saúde, permite enviar informações de um cartão virtual por NFC e recebe notificações personalizadas!

Foi criado um protótipo de website para o Saúde Web para mandar notificações para o app, acessível em:
https://notificacao-appsaude.vercel.app/

## Sobre o App!


A ideia do app é simples, substituir um cartão físico, acessar as informações do usuário e  permitir as opções do site dentro do celular pessoal!

O Cartão vai permitir NFC(Aproximação), as informações são obtidas por API e mostradas na tela.

O Desenvolvimento foi feito em React que usa linguagem de JavaScript. É necessário buscar entender o Expo GO, React, Native Base, Firebase, APIs e o funcionamento do NFC!

O projeto foi finalizado até o nível de protótipo e foi assumido pela PROCERGS para o desenvolvimento do produto final! Se vc quiser testar o aplicativo, basta baixar o [APK](Apk/application-8491db70-2c4b-4414-89d6-9910c37c4da5.apk)

Se vc deseja clonar este projeto é importante saber que alguns arquivos precisam ser alterados e outros foram removidos para garantir a segurança das informações!

- [ ] android/app/google-services.json
- [ ] firebase.js
- [ ] src/screens/Login.js
- [ ] src/screens/Registro.js

## Build: 
Criar local.properties na pasta android:  sdk.dir=C:\\Users\\SEU_USUÁRIO\\appData\\Local\\Android\\Sdk

## Melhorias?
- [ ] Responder as mensagens sem abrir o aplicativo;
- [ ] Adicionar o Storage do FB para enviar imagens e documentos;
- [ ] Informar ao usuário que todos os campos precisam ser preenchidos na primeira alteração dos dados;
- [ ] Fatorar o código, substituindo alguns arquivos ou screens por componentes:
    - fileUpload;
    - JanelaPerfil;
    - OpenCamera;
    - GetFetureView;
    - Virtualized;
    - ic_launcher_round.