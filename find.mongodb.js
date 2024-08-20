/* Nome do banco de dados */
const database = 'BD3-ISAIAS-AULA';

/* Nome do banco de dados da coleção */
const collection = "Livraria";

/* Criar ou acessar o banco de dados */
use(database);

/* SELECIONAA TODOS OS REGISTROS DA COLEÇÃO */
db[collection].find();