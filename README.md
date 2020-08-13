
<!--Banner e logo-->

<p align="center">
   <img src="/github/logo.png" alt="Proffy" />
</p>

<!-- Badges -->
<p align="center">
   <a href="https://www.linkedin.com/in/joyce-querubino/">
      <img alt="Felipe Martins" src="https://img.shields.io/badge/-Joyce Querubino-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <a href="https://nextlevelweek.com/episodios/discovery/1/edicao/2">
    <img alt="NextLevelWeek#2" src="https://img.shields.io/badge/Next Level Week%20-2.0-%237519C1">
  </a>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/K-Schaeffer/NLW-2?color=774DD6">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/K-Schaeffer/NLW-2?color=774DD6">
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
</p>

<!-- Indice-->
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-preview">Preview</a> • 
 <a href="#-Versões">Versões</a> •  
 <a href="#-como-executar-o-projeto">Executando</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-licença">Licença</a>
</p>

<!--Sobre o projeto-->
## 💻 Sobre o projeto

O projeto foi desenvolvido durante a **NLW #2- Next Level Week 2** oferecida pela [Rocketseat](https://nextlevelweek.com/episodios/discovery/1/edicao/2), que é uma experiência online com muito conteúdo prático, desafios e hacks onde as aulas em vídeo ficam  disponíveis durante uma semana, um prazo curto que necessita de muito empenho e dedicação.

O <strong>Proffy</strong> surgiu com a missão de trazer uma homenagem aos educadores do Brasil, através de uma plataforma que conecta alunos e professores de diversas matérias, permitindo que os alunos encontrem professores e entrem em contato. Todo o desenvolvimento foi feito na semana do dia nacional dos profissionais de educação. 

Através dele tive meu primeiro contato com o ReactJs e ReactNative, além de aprimorar meus conhecimentos em com HTML, CSS, SQL e APIs.

---

<!--Funcionalidades do projeto-->
## ⚙️ Funcionalidades

- Professores podem se cadastrar na plataforma através de um formulário no qual preenchem seus dados:
  - [x] Nome completo;
  - [x] Link de uma foto;
  - [x] Número de whatsapp;
  - [x] Biografia;
  - [x] Matéria que leciona;
  - [x] Custo hora/aula;
  - [x] Horários disponíveis.

- Alunos podem buscar professores e:
  - [x] Filtrar por matéria, dia da semana e horário;
  - [x] Entrar em contato diretamente no whatsapp de determinado professor;
  - [x] Além de favoritar os professor através da versão mobile.
  
---

## Preview


<!--Layout session-->
## 🎨 Versões

### Versão Mobile


### Versão Web


### Servidor

---

<!--Running session-->
## 🚀 Como executar o projeto

Este projeto consiste em três partes:
1. [Mobile](/mobile)
2. [Web](/src/pages) 
3. [Servidor](/server/src)  
4. [Database](/src/database) 

<!--💡Obs-->

### Pré-requisitos

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable)

#### 🎲 Rodando o projeto

```bash

# Clone o repositório
$ git clone https://github.com/K-Schaeffer/NLW-2.git

# Acesse a pasta do projeto no prompt de comando
$ cd NLW-2

# Instale as dependências
$ npm install

# Execute o script "dev"
$ npm run dev

# O projeto inciará na porta: 3000 - acesse http://localhost:3000 

```

Opcionalmente, você pode desejar ter uma base de dados limpa, para isso:

```bash

# Delete o arquivo database.sqlite
$ rm -r src/database/database.sqlite

# Execute o arquivo para criação das tabelas
$ node src/database/db.js

```

Feito isso, basta executar o procedimento de rodar o projeto, cadastrar professores, e buscá-los. 

---

<!--Tecnologies session-->
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-end**  ([HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)  +  [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) + [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript))

#### **Back-end**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[Nunjucks](https://mozilla.github.io/nunjucks/)**
-   **[Nodemon](https://nodemon.io)**

> Veja o arquivo [package.json](./package.json)

#### **Database**  ([Sqlite-Async](https://www.npmjs.com/package/sqlite-async))

#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Layout:  **[Figma](https://www.figma.com/)**  →  **[Layout (Proffy)](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web)**
-   Markdown:  **[EmojiCopy](https://www.emojicopy.com)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Badges:  **[Shields.io](https://shields.io)**


<!--License session-->
## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---

<!--Bottom session-->
<h4 align=center>Desenvolvido por Joyce Querubino <a href="https://www.linkedin.com/in/joyce-querubino/"> <strong>Entre em contato</strong> :)</a></a></h4>
