const database = "BD3-ISAIAS-AULA"
const collection = "Livraria"
use(database);

db[collection].find(
                        {"descricao":/robôs/i},
                        {"_id":0, "codigo":0}
                    );