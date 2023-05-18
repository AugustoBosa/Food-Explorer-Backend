# Food Explorer
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/AugustoBosa/Food-Explorer-Backend/blob/main/README.md)

> 🍔🌮 Um menu interativo online para fazer pedidos e pagamentos de comida.

Este projeto é o projeto final do curso Explorer da Rocketseat. O aplicativo Food Explorer permite que os clientes naveguem e façam pedidos de itens de comida de um menu, bem como façam pagamentos online.

Veja-o funcionando: [Food Explorer Demo](https://gus-foodexplorer.netlify.app/)

Por favor, note que a demonstração implantada é fornecida apenas para fins de demonstração e pode não refletir dados ou funcionalidades em tempo real.

# Sumário

- 🌐 [Idiomas](#idiomas)
- ⚙️ [Instalação](#instalação)
  - [Backend](#backend)
  - [Frontend](#frontend)
- 📖 [Uso](#uso)
  - [Lado do Cliente](#lado-do-cliente)
  - [Lado do Administrador](#lado-do-administrador)
  - [Implantação](#implantação)
- ✨ [Recursos](#recursos)
- 📚 [Documentação](#documentação)
  - [Backend](#documentação-do-backend)
  - [Frontend](#documentação-do-frontend)
- 🤝 [Contribuindo](#contribuindo)
- 📝 [Licença](#licença)
- 🙏 [Agradecimentos](#agradecimentos)
- ⚠️ [Manutenção do Projeto](#manutenção-do-projeto)
- 📞 [Contato](#contato)

## 🌐 Idiomas <a name="idiomas"></a>

O aplicativo Food Explorer está disponível apenas em Português (Brasil) no momento.

**Nota:** Como parte do curso Explorer e dado que não há planos para aplicativos adicionais, atualmente não há planos para traduzir o aplicativo para o inglês.


## ⚙️ Instalação <a name="instalação"></a>

### Backend <a name="backend"></a>

1. Clone o repositório do backend:

   ```bash
   git clone https://github.com/AugustoBosa/Food-Explorer-Backend.git
   ```

2. Instale as dependências do backend:

   ```bash
   cd Food-Explorer-Backend
   npm install
   ```

3. Crie um arquivo `.env` com base no arquivo `.env.example` fornecido no diretório do backend.
   Configure as variáveis de ambiente conforme desejado.

4. Inicie o servidor de desenvolvimento do backend:

   ```bash
   npm run dev
   ```

### Frontend <a name="frontend"></a>

1. Clone o repositório do frontend:

   ```bash
   git clone https://github.com/AugustoBosa/Food-Explorer-Frontend.git
   ```

2. Instale as dependências do frontend:

   ```bash
   cd Food-Explorer-Frontend
   npm install
   ```

3. Edite o arquivo `src/services/api.js` e atualize a `baseURL` para corresponder ao endereço desejado do backend. Use `http://localhost:3333` se o backend estiver sendo executado na porta padrão, ou atualize-o de acordo com o valor especificado no arquivo `.env`.

4. Inicie o servidor de desenvolvimento do frontend:

   ```bash
   npm start
   ```
   
5. Acesse a aplicação frontend em `http://localhost:5173` ou na porta especificada no arquivo `vite.config.js`.
   
   
## 📖 Uso <a name="uso"></a>

### Lado do Cliente <a name="lado-do-cliente"></a>

1. Crie uma conta ou faça login em uma conta existente.
2. Navegue pelo menu e selecione os itens de comida desejados.
3. Adicione os itens ao carrinho.
4. Remova ingredientes indesejados dos pratos.
5. Prossiga para o pagamento e insira os detalhes do seu pagamento.
6. Confirme o seu pedido.
7. Acompanhe o status do seu pedido na página de rastreamento de pedidos.

### Lado do Administrador <a name="lado-do-administrador"></a>

1. Faça login na sua conta de administrador.
2. Crie novos pratos e ingredientes.
3. Visualize os pedidos em aberto e atualize o status para corresponder ao status atual de produção.

**Nota:** Durante a inicialização do banco de dados, um usuário administrador padrão é criado com o email "administrador" e a senha "administrador".

Verifique o aplicativo no lado do administrador usando as credenciais de administrador padrão: [Food Explorer Demo](https://gus-foodexplorer.netlify.app/admin)


### 🚀 Implantação <a name="implantação"></a>

Backend:

O backend está implantado no Render (https://foodexplorer-api-r8fs.onrender.com).

Frontend:

O frontend está implantado no Netlify (https://gus-foodexplorer.netlify.app).

Por favor, observe que esses links de implantação são fornecidos como exemplos e podem não estar acessíveis ou disponíveis no futuro.


## ✨ Recursos <a name="recursos"></a>

- Autenticação e autorização de usuários para clientes e administradores.
- Menu interativo com categorias, funcionalidade de pesquisa e personalização de pratos.
- Adicionar itens ao carrinho e gerenciar o conteúdo do carrinho.
- Rastreamento de pedidos em tempo real para clientes.
- Remover ingredientes indesejados dos pratos.
- Painel de administração para gerenciar pratos, ingredientes e pedidos.
- Páginas de histórico de pedidos para clientes e administradores.
- Observe que não há validação de pagamento implementada nesta aplicação. A seção de pagamento com cartão de crédito possui um formato de dados/regex para o número do cartão de crédito, mas nenhuma validação ou processos de pagamento reais são implementados. Para facilitar a navegação do usuário entre os estados do pedido, os usuários podem clicar na imagem da mensagem de status de pagamento para avançar o pedido na linha de produção.


## 📚 Documentação <a name="documentação"></a>

<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/sqlite/sqlite-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg" width="35px"></img>


### Backend <a name="documentação-do-backend"></a>

O backend do aplicativo Food Explorer é construído usando o Node.js. Ele serve como o componente do servidor responsável por lidar com as solicitações do frontend e interagir com o banco de dados. O backend fornece as APIs necessárias para autenticação de usuários, gerenciamento do menu, manipulação de pedidos e muito mais.

Para executar o servidor backend, verifique se você tem o Node.js instalado. Clone o repositório do backend e siga as instruções na seção [Instalação](#installation) para configurar o projeto.

O backend utiliza as seguintes dependências:

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Uma biblioteca para hash de senhas.
- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar o Compartilhamento de Recursos de Origem Cruzada (CORS) no Express.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Um módulo para carregar variáveis de ambiente de um arquivo `.env`.
- [express](https://expressjs.com/): Um framework de aplicativo web rápido e minimalista para o Node.js.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors): Um middleware para lidar com erros assíncronos no Express.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Uma implementação de Tokens Web JSON (JWT) para autenticação baseada em token.
- [knex](https://knexjs.org/): Um construtor de consultas para o Node.js que suporta vários sistemas de banco de dados.
- [moment-timezone](https://www.npmjs.com/package/moment-timezone): Uma biblioteca para análise, manipulação e formatação de datas e horários com suporte a fuso horário.
- [multer](https://www.npmjs.com/package/multer): Um middleware para manipulação de uploads de arquivos no Express.js.
- [pm2](https://www.npmjs.com/package/pm2): Um gerenciador de processos de produção para aplicativos Node.js.
- [sqlite](https://www.npmjs.com/package/sqlite): Um módulo

 que fornece uma interface simples para interagir com bancos de dados SQLite.
- [sqlite3](https://www.npmjs.com/package/sqlite3): Uma biblioteca para acessar bancos de dados SQLite.

Para obter mais informações sobre cada dependência, consulte a documentação correspondente no npm.

Para iniciar o servidor backend, use o comando `npm run dev`. O servidor estará em execução na porta 3333 (ou na porta especificada no arquivo `.env`).

Certifique-se de configurar o arquivo `.env` com base no arquivo `.env.example` fornecido, ajustando as variáveis de ambiente necessárias conforme desejado.


### Frontend <a name="documentação-do-frontend"></a>

O frontend do aplicativo Food Explorer é construído usando o React. Ele é projetado com uma mentalidade mobile-first e segue um design fornecido no [Figma](https://www.figma.com/community/file/1196874589259687769). O frontend é desenvolvido com foco na criação de uma interface de usuário responsiva e intuitiva. Para obter transições suaves entre tamanhos de tela, o aplicativo utiliza estilos CSS personalizados e o aplicativo [EzClamp](https://github.com/AugustoBosa/EzClamp), desenvolvido pelo autor do projeto.

Para executar o aplicativo frontend, verifique se você tem o Node.js instalado. Clone o repositório frontend e siga as instruções na seção [Instalação](#installation) para configurar o projeto.

O frontend utiliza as seguintes dependências e dependências de desenvolvimento:

- [axios](https://www.npmjs.com/package/axios): Um cliente HTTP baseado em promessas para fazer solicitações de API.
- [jwt-decode](https://www.npmjs.com/package/jwt-decode): Uma biblioteca para decodificar JSON Web Tokens (JWT).
- [react](https://reactjs.org/): Uma biblioteca JavaScript para construir interfaces de usuário.
- [react-dom](https://reactjs.org/docs/react-dom.html): Um pacote para renderizar componentes React no DOM.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Uma biblioteca de roteamento para aplicativos React.
- [styled-components](https://styled-components.com/): Uma biblioteca CSS-in-JS para estilizar componentes React.
- [@types/react](https://www.npmjs.com/package/@types/react): Definições de tipo TypeScript para React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): Definições de tipo TypeScript para React DOM.
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): Um plugin Vite para desenvolvimento React.
- [vite](https://vitejs.dev/): Um servidor de desenvolvimento rápido e ferramenta de compilação para aplicativos web modernos.

Para obter mais informações sobre cada dependência, consulte a documentação correspondente no npm.

Antes de executar o aplicativo frontend, certifique-se de editar o arquivo `api.js` e definir o endereço do backend desejado usando a porta padrão 3333 ou a porta especificada no arquivo `vite.config.js`.

Para iniciar o aplicativo frontend, use o comando `npm run dev`. O aplicativo estará em execução na porta 5173 (ou na porta especificada no arquivo `vite.config.js`).


## 🤝 Contribuição <a name="contribuindo"></a>

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para contribuir para o projeto Food Explorer. Aqui estão algumas maneiras pelas quais você pode contribuir:

- Relate bugs ou problemas que encontrar ao usar o aplicativo.
- Sugira novos recursos ou melhorias para aprimorar a experiência do usuário.
- Envie pull requests com correções de bugs, implementações de recursos ou melhorias na documentação.
- Ajude a melhorar a documentação do projeto corrigindo erros ortográficos, esclarecendo explicações ou adicionando exemplos.

Para contribuir, siga estas etapas:

1. Fork o repositório e crie seu branch a partir do branch `main`.
2. Faça suas alterações, garantindo que seu código siga as diretrizes de codificação do projeto.
3. Faça commits das suas alterações com mensagens de commit descritivas.
4. Faça push das suas alterações para o repositório forked.
5. Envie um pull request para o repositório principal, descrevendo as alterações que você fez.

Agradeço suas contribuições e feedback para tornar o Food Explorer ainda melhor!

## 📝 Licença <a name="licença"></a>

Este projeto está licenciado sob a [Licença MIT](https://github.com/AugustoBosa/Food-Explorer-Backend/blob/main/LICENSE).

## 🙏 Agradecimentos <a name="agradecimentos"></a>

O aplicativo Food Explorer foi desenvolvido como projeto final do curso Explorer da Rocketseat. Gostaria de expressar minha gratidão à Rocketseat por fornecer o conhecimento e os recursos para construir este aplicativo.

Também gostaria de agradecer às seguintes pessoas e recursos por suas contribuições e inspiração:

[Rocketseat](https://www.rocketseat.com.br/) por seus materiais de curso abrangentes e suporte.
Comunidade [Figma](https://www.figma.com/) por fornecer a inspiração e os recursos de design. O frontend do aplicativo foi desenvolvido com base em um design do Figma fornecido.
[EzClamp](https://augustobosa.github.io/EzClamp/) - uma ferramenta desenvolvida para aprimorar a fluidez das transições entre os tamanhos de tela no processo de desenvolvimento frontend.

Sou grato pela orientação e suporte recebidos durante o desenvolvimento do Food Explorer.

## ⚠️ Manutenção do Projeto <a name="manutenção-do-projeto"></a>

O projeto Food Explorer é mantido ativamente e pode passar por retrabalhos e atualizações para solucionar quaisquer bugs ou problemas que possam surgir no futuro. No momento, nenhum bug foi relatado.

Observe que os links de implantação fornecidos podem se tornar indisponíveis no futuro devido a vários motivos. Se você tiver dificuldades para acessar o aplicativo ou tiver alguma dúvida, fique à vontade para entrar em contato comigo para obter assistência.

Seus comentários e contribuições são valiosos para melhorar o projeto, portanto, não hesite em relatar bugs ou sugerir melhorias se você encontrá-los. Juntos, podemos tornar o Food Explorer ainda melhor!


## 📞 Contato <a id="contato"></a>

Para qualquer dúvida ou pergunta, sinta-se à vontade para entrar em contato comigo:

📧 - dev.augustobosa@gmail.com

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/347bc18a-8e27-48eb-835f-1411f3229916) -  +55 48 9.9953-1842

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/7451cd53-6201-42ed-bf24-4838179ab9c9) - [AugustoBosa](https://github.com/AugustoBosa)

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/93ba70a7-fc22-4e79-96d0-5f4d3dec5912) - [AugustoBosa](https://www.linkedin.com/in/augusto-bosa/)
