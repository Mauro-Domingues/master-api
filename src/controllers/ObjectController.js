import objectService from '../services/ObjectService.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()
const db = new objectService()

// aqui é inserido os métodos com regras de negócio

/* a ideia é conseguir gerar o repository, o service,
e a entidade automaticamente e seus respectivos imports com nomes do arquivo e dos imports dinamicos enviados
por parâmetro nas funções da biblioteca nativa do node 'fs'. Os nomes das classes podem sempre
ser os mesmos desde que o export seja default
e o unico trabalho a fazer seria esse controller e as rotas*/

// Abaixo alguns métodos de exemplo que são capazes graças ao crud genérico de cada service

export default class Controller {
    async get(req, res){
        const relations = {filhos: true, pais: true}
        try{
            const object = await db.get(relations)
            return res.send({
                status: 200,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
                data: object
            })
        } catch (error) {
            return res.send({
                status: 400,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }
    async getById(req, res){
        const {id} = req.params
        const param = {id: Number(id)}
        const relations = {filhos: true, pais: true}
        try{
            const object = await db.getBy(param, relations)
            return res.send({
                status: 200,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
                data: object
            })
        } catch (error) {
            return res.send({
                status: 404,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }
    async getByName(req, res){
        const {name} = req.params
        const param = {name: name}
        const relations = {filhos: true, pais: true}
        try{
            const object = await db.getBy(param, relations)
            return res.send({
                status: 200,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
                data: object
            })
        } catch (error) {
            return res.send({
                status: 404,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }
    async getBySomething(req, res){
        const {something} = req.params
        const param = {something: something}
        const relations = {filhos: true}
        try{
            const object = await db.getBy(param, relations)
            return res.send({
                status: 200,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
                data: object
            })
        } catch (error) {
            return res.send({
                status: 404,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }
    async login(req, res){
        const {email, password} = req.body
        try{
            const objReturn = await db.get()
            let auth = ['invalid_Token']
            for (let i = 0; i < users.length; i++) {
                if (email === objReturn[i].email) {
                    let check = await bcrypt.compare(password, objReturn[i].password)
                    if (check) {
                        auth = [{
                            "Token": jwt.sign({
                                user: objReturn[i].email,
                                password: objReturn[i].password
                            }, process.env.SECRET, {
                                expiresIn: "1h"
                            })
                        }]
                    }
                }
            }
            return res.send({
                status: 200,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
                data: auth
            })
        } catch (error) {
            return res.send({
                status: 401,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }
    async create(req, res){
        const body = req.body
        try{
            const object = await db.create(body)
            return res.send({
                status: 201,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
                data: object
            })
        } catch (error) {
            return res.send({
                status: 400,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }
    async update(req, res){
        const {password} = req.body
        const {id} = req.params
        const param = {id: Number(id)}
        const object = {}
        try{
            const objReturn = await db.getBy(param)
            if(objReturn){
                object = await db.update(password)
            }
            return res.send({
                status: 200,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
                data: object
            })
        } catch (error) {
            return res.send({
                status: 400,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }
    async delete(req, res){
        const {id} = req.params
        const param = {id: Number(id)}
        try{
            const objReturn = await db.getBy(param)
            if(objReturn){
                await db.delete(param)
            }
            return res.send({
                status: 204,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        } catch (error) {
            return res.send({
                status: 404,
                message: 'Pegar a mensagem do dicionário',
                message_code: 'Pegar o código da mensagem no dicionário',
            })
        }
    }

}