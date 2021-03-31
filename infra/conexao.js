const mysql =require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user : 'root',
    password: 'mysql',
    database: 'agenda'
})

module.exports = conexao