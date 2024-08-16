
//Importar o mySQL
const mysql = require('mysql2');
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
console.log(process.env.DB_NAME)

const db = mysql.createConnection({
    host:process.env.DB_HOST, //Endereço do servidor do Bnaco de Dados
    host:process.env.DB_USER, //Nome do usuário para acesso
    host:process.env.DB_PASS, //Senha do usuário
    host:process.env.DB_NAME //Nome do banco de dados que será acessado
});

db.connect((err) => {
    if(err){
        console.error('ERRO AO CONECTAR', err) //Erro
    }
    console.log(`CONECTADO AO BANCO DE DADOS ${process.env.DB_NAME}`); //Conectado com sucesso
    }
);
module.exports = db