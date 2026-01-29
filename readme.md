📌 Front-Api-ToDo-List

Uma interface front-end responsiva para gerenciar tarefas (To-Do List) consumindo uma API RESTful back-end — ideal para demonstrar integração entre cliente e servidor em aplicações web modernas.

👉 Este projeto foi desenvolvido para funcionar em conjunto com a API de tarefas disponível em:

🔗 Projeto‑ToDo‑List‑Api (Back‑End)

🚀 Descrição

O Front-Api-ToDo-List é uma aplicação web que permite ao usuário criar, visualizar, atualizar e excluir tarefas através de uma interface intuitiva. Ele consome os endpoints de uma API REST construída em Node.js com Express e Sequelize para gerenciar dados de tarefas, promovendo uma experiência full-stack completa.

🧠 Funcionalidades

✔️ Listar todas as tarefas cadastradas via API
✔️ Adicionar novas tarefas com descrição
✔️ Marcar tarefas como concluídas ou pendentes
✔️ Editar e excluir tarefas
✔️ Interface reativa usando JavaScript para comunicação com o servidor

🧩 Tecnologias Utilizadas
Camada	Tecnologias
Front-end	HTML, CSS e JavaScript
Comunicação com API	Fetch / AJAX
API Back-end (requerida)	Node.js, Express, Sequelize (via Projeto-ToDo-List-Api)
Banco de dados (API)	SQLite
📦 Pré-requisitos

Antes de rodar o front-end, você deve:

Ter a API ToDo List (back-end) rodando localmente ou em algum servidor.

Siga as instruções da repo: Projeto‑ToDo‑List‑Api (Back‑End)

Ter um ambiente com:

Navegador moderno (Chrome, Firefox, etc.)

(Opcional) Servidor HTTP local como Live Server / http-server

📌 Instalação e Execução

Clone este repositório:

git clone https://github.com/lucasrgbarbosa/Front-Api-ToDo-List.git


Acesse a pasta:

cd Front-Api-ToDo-List


Abra o arquivo index.html com um navegador:

Duplo clique ou

Sirva via Live Server / http-server:

npx http-server .


Assegure-se que a API esteja rodando e acessível no endpoint configurado no código front-end (em geral http://localhost:3000/api/v1/tarefas).

🛠️ Como Funciona a Conexão com a API

Este front-end se comunica com a API usando chamadas HTTP (fetch) para os seguintes recursos do back-end:

Ação	Endpoint
Criar tarefa	POST /api/v1/tarefas
Listar tarefas	GET /api/v1/tarefas
Atualizar tarefa	PUT /api/v1/tarefas/:id
Atualizar status	PATCH /api/v1/tarefas/:id/status
Deletar tarefa	DELETE /api/v1/tarefas/:id

Os endpoints fazem parte da API construída em Node.js com Express e Sequelize no repositório Projeto-ToDo-List-Api.

📁 Estrutura do Projeto
Front-Api-ToDo-List/
├── css/
│   └── estilos.css
├── js/
│   └── main.js
├── index.html
└── README.md

💡 Melhorias Futuras

✨ Deploy da aplicação (Vercel, Netlify)
✨ Autenticação de usuários
✨ Feedback visual ao adicionar/editar tarefas
✨ Ajustes de responsividade para mobile

🧑‍💻 Contribuição

Contribuições são bem-vindas! Você pode:

Abrir uma issue relatando bugs ou sugerindo melhorias

Criar um pull request com novas funcionalidades

📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir o código com os devidos créditos.