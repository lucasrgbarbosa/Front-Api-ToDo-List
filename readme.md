# 📋 Frontend To-Do List

> Projeto desenvolvido como parte do desafio do Módulo 3. Uma aplicação web de lista de tarefas moderna, responsiva e integrada a uma API REST.

## 💻 Sobre o Projeto

Este projeto tem como objetivo colocar em prática os conhecimentos de **Front-end** consumindo uma API real. O desafio foi criar uma interface limpa, semântica e totalmente responsiva, seguindo a metodologia **Mobile-First**.

A aplicação permite ao usuário gerenciar suas tarefas (Criar, Ler, Atualizar e Deletar) com feedback visual imediato e persistência de dados no servidor.

## ⚙️ Funcionalidades

-   **Adicionar Tarefa:** Criação de tarefas com título, descrição e status inicial.
-   **Listagem Dinâmica:** Exibição das tarefas vindas da API em cards organizados.
-   **Atualização de Status:**
    -   Interface intuitiva com botões de seleção (Radio Group) para mudar entre "A Fazer", "Em Andamento" e "Concluída".
    -   Indicação visual colorida para cada estado.
-   **Exclusão:** Remoção de tarefas do banco de dados.
-   **Responsividade:** Layout adaptável que funciona perfeitamente em celulares (coluna única) e desktops (layout em grade/lado a lado).
-   **Feedback Visual:** Indicadores de carregamento ("Enviando...", "Carregando...") para melhor experiência do usuário.

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido sem o uso de frameworks pesados, focando na performance e nos fundamentos da web:

-   **HTML5 Semântico:** Uso correto de tags como `<header>`, `<main>`, `<section>`, `<article>` e `<footer>` para acessibilidade e SEO.
-   **CSS3 Moderno:**
    -   **Mobile-First:** Estilos base focados em telas pequenas.
    -   **Flexbox & Grid:** Para estruturação do layout.
    -   **CSS Variables:** Para consistência de cores e fácil manutenção.
    -   **UI Polida:** Estilização customizada de inputs e botões de rádio para uma aparência de "app nativo".
-   **JavaScript (ES6+):**
    -   **Fetch API:** Para comunicação assíncrona com o servidor (`GET`, `POST`, `PATCH`, `DELETE`).
    -   **Async/Await:** Para código mais limpo e legível.
    -   **Manipulação do DOM:** Geração dinâmica de HTML.
    -   **Arquitetura Organizada:** Separação lógica entre camada de API e camada de Interface no mesmo arquivo.

## 📂 Estrutura de Arquivos

```text
/
├── index.html          # Estrutura principal e semântica da página
├── css/
│   └── style.css       # Estilos globais, reset e responsividade
├── js/
│   └── app.js          # Lógica unificada (API + DOM + Eventos)
└── README.md           # Documentação do projeto
````

🚀 Como Executar o Projeto
Como este projeto utiliza apenas tecnologias nativas (Vanilla), não é necessário instalar dependências (como node_modules).

Clone o repositório:

Bash
git clone [https://github.com/lucasrgbarbosa/Front-Api-ToDo-List.git](https://github.com/lucasrgbarbosa/Front-Api-ToDo-List.git)
Abra o projeto: Basta abrir o arquivo index.html em qualquer navegador moderno.

Dica: Para uma melhor experiência (e evitar bloqueios de CORS em alguns navegadores), recomendo usar a extensão Live Server do VS Code.

🖥️ Deploy: https://lucasrgbarbosa.github.io/Front-Api-ToDo-List/

🔗 API Utilizada
O projeto consome a seguinte API REST:

Endpoint Base: https://duo-project-mtrhee.onrender.com/api/v1/tarefas

Nota: Como a API está hospedada no Render (plano gratuito), a primeira requisição pode demorar alguns segundos para "acordar" o servidor.

✒️ Autor
Desenvolvido por Lucas Ribeiro.
