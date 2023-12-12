Reserva BP - Aplicação de Agendamento
Este é um projeto denominado Reserva BP, uma aplicação desenvolvida para facilitar o agendamento de reuniões entre Corretores de Seguro e Clientes da Bem Protege.

Tecnologias Utilizadas
Node.js
Express.js
MongoDB (ou a sua base de dados de preferência)
TypeScript
Mongoose (para interação com o MongoDB)
Estrutura do Projeto
O projeto está dividido em duas partes principais: users e appointments. Cada uma dessas partes possui as seguintes subpastas:

controllers: Responsável por receber e responder às requisições HTTP.
model: Contém os modelos de dados (usados pelo Mongoose).
repository: Lida com a interação direta com o banco de dados.
routes: Define as rotas da API.
service: Contém a lógica de negócios da aplicação.

Como Executar o Projeto
1 - Clone o repositório:

- git clone https://github.com/seu-usuario/reserva-bp.git

2 - Instale as dependências:

cd reserva-bp
npm install

3 - Inicie o servidor:

- npm start

Funcionalidades

1 - Cadastro de Usuários (Clientes e Corretores de Seguro):

Rota: POST /app/users/register

Corpo da Requisição: 

{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "senha",
  "dateOfBirth": "yyyy-mm-dd",
  "phoneNumber": "1234567890",
  "address": {
    "street": "Rua Principal",
    "city": "Cidade",
    "zipCode": "12345-678"
  }
}

2 - Agendamento de Reuniões:

Rota: POST /app/appointments/schedule

Corpo da Requisição:

json
Copy code
{
  "client": "ID_DO_CLIENTE",
  "consultant": "ID_DO_CONSULTOR",
  "date": "yyyy-mm-ddTHH:mm:ss.sssZ",
  "duration": 60
}


Autor:

João Victor