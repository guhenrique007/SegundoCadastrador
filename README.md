# SegundoCadastrador

1 - Fork/Clone

2 - Install dependencies 
  - `npm install`

3 - Run DB 
  - `psql -U postgres -f consultas.sql`

4 - Run the development server 
  - `npm start`

5 - Test Server
  -  `http://localhost:3000`

6 - Test Queries
  - Listar todos os alunos
  `http://localhost:3000/api/alunos` 
  
   - Listar todos os bairros
  `localhost:3000/api/enderecos`
  
  - Listar informações de um aluno específico
  `localhost:3000/api/alunos/:id`
  
  - Listar informações gerais sobre os alunos
  `localhost:3000/api/infoalunos`
  
  - Listar informações gerais sobre os bairros
  `localhost:3000/api/bairro`
  
  - Cadastrar um aluno
  Teste em um novo terminal:

    `$ curl --data "nome=henrique&matricula=308&nota=5.1&endereco_id=0" \`

    Verifique em:

    `http://127.0.0.1:3000/api/puppies`
  
  - Cadastrar um endereco
  
    `$ curl --data "id=54&rua=tuiuti&numero=555&bairro=tatuape" \`

    Verifique em:
    
    `http://127.0.0.1:3000/api/puppies`
  
 


