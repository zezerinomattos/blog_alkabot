# Bloag Alkabot

Este é um projeto criado em React.js que consome uma API externa de posts e tem como função principal exibir esses posts em uma página Home e os comentários associados em uma página PostDetalhe.

## Como clonar e rodar o projeto

Para clonar o projeto em seu computador, siga as instruções abaixo:

1. Abra o terminal e navegue até o diretório em que deseja clonar o projeto.

2. Execute o seguinte comando: git clone https://github.com/SEU-USUARIO/blog_alkabot.git (substitua "SEU-USUARIO" pelo seu nome de usuário no GitHub)

3. Após o término do processo, navegue para o diretório do projeto com o comando cd blog_alkabot.

4. Instale as dependências do projeto com o comando npm install.

5. Para iniciar o projeto, execute o comando npm start. O projeto será executado na porta padrão do React, a porta 3000 [http://localhost:3000](http://localhost:3000).


## Estrutura do projeto

O projeto foi criado com o comando npx create-react-app e possui a seguinte estrutura:

blog_alkabot/

  node_modules/
  
  public/
    index.html
    robots.txt

  src/
    components/
      Navbar/
        index.js
      Footer/
        index.js
      Paginacao/
        index.js
    
    pages/
      Home/
        index.js
      PostDetalhe/
        index.js
    
    router/
      index.js
    
    services/
      api.js
    
    App.js
    App.css
    index.js

    package.json
    README.md


node_modules/: diretório que contém as dependências do projeto.

public/: diretório que contém os arquivos públicos do projeto.

src/: diretório que contém os arquivos-fonte do projeto.

components/: diretório que contém os componentes do projeto.

pages/: diretório que contém as páginas do projeto.

router/: diretório que contém o arquivo de rotas do projeto.

services/: diretório que contém o arquivo responsável por consumir a API.

App.js: arquivo que contém o componente raiz do projeto.

App.css: arquivo de estilos globais do projeto.

index.js: arquivo que inicia o projeto.

package.json: arquivo que contém as informações do projeto, como nome, versão e dependências.

README.md: este arquivo que você está lendo.


## Executando o projeto

Para executar o projeto, siga as instruções abaixo:

1. Navegue até o diretório do projeto com o comando cd blog_alkabot.

2. Execute o comando npm start.

3. O projeto será executado na porta padrão do React, a porta 3000 [http://localhost:3000](http://localhost:3000).

## Conclusão

Espero que este readme tenha sido claro e esclarecedor sobre como clonar e rodar o projeto. Qualquer dúvida, não hesite em entrar em contato. Obrigado pela atenção!

