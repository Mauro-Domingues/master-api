import clientService from '../services/ClientService.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()
const db = new clientService()

// aqui é inserido os métodos com regras de negócio

/* a ideia é conseguir gerar o repository, o service,
e a entidade automaticamente e seus respectivos imports com nomes do arquivo e dos imports dinamicos enviados
por parâmetro nas funções da biblioteca nativa do node 'fs'. Os nomes das classes podem sempre
ser os mesmos desde que o export seja default
e o unico trabalho a fazer seria esse controller e as rotas*/

// Abaixo alguns métodos de exemplo que são capazes graças ao crud genérico de cada service

export default class Controller {}