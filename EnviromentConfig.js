/*==================================== ASSETS ====================================*/

nullable = {nullable: true}
autoincrement = {autoincrement: true}
autoupdate = {autoupdate: true}
autocreate = {autocreate: true}

const types = [
    'char',
    'text',
    'int',
    'timestamp'
]

/*=================================== ENVIROMENTS ===================================*/

const clients = [
    {name: string, type: types[0], nullable},
    {surname: string, type: types[0], nullable},
    {age: number, type: types[2], nullable},
    {history: string, type: types[1], nullable}
]  // usar isso para popular dinamicamente a entidade

const clientRelations = ['house', 'car', 'parents']  // usar isso para popular dinamicamente as relações da entidade entidade

const objects = [
    {name: string, type: types[0], nullable},
    {email: string, type: types[0], nullable},
    {password: number, type: types[0], nullable},
]  // usar isso para popular dinamicamente a entidade

const objectRelations = ['content', 'materials']  // usar isso para popular dinamicamente as relações da entidade entidade

export { clients, clientRelations, objects, objectRelations}

// Para popular é preciso entender a biblioteca 'fs', nativa do node

/*
// Crie uma requisição para o módulo file system
let fs = require('fs');
// Utilize o appendFile() para criar um novo arquivo que será anexado à sua pasta node
// onde 'meuNovoArquivo.txt será o arquivo a ser criado
// 'Eu sou o novo conteudo é o conteúdo do arquivo txt
fs.appendFile('meuNovoArquivo.txt', 'Eu sou o novo conteudo', function (err){
    // Se ocorrer um erro, especifique
    if (err) throw err;
    // Senão, logue no console = salvo!
    console.log("salvo!")
})
*/

// Depois de conseguir fazer dar certo, utilizar do mesmo para uma versão em typescript
// o motivo de usar o typeorm como default é a gama enorme de tipos de banco de dados compativeis
// mysql, mariadb, postgres, cockroachdb, sqlite, mssql, oracle, sap, spanner, cordova, nativescript, react-native, expo, mongodb