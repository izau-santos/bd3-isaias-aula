/* Nome do banco de dados */
const database = 'BD3-ISAIAS-AULA';

/* Nome do banco de dados da coleção */
const collection = "Livraria";

/* Criar ou acessar o banco de dados */
use(database);

db[collection].deleteOne(
    {codigo:"9"}
);