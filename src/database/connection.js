import { DataSource } from "typeorm"
import 'dotenv/config'
import 'reflect-metadata'

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE, // especifica o banco de dados a ser utiizado
    host: process.env.DB_HOST, 
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    //synchronize: true,
    //logging: true,
    entities: [`${__dirname}/**/entities/*.{ts, js}`],
    //subscribers: [],
    migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
})