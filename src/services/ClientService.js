import { repository } from '../database/repositories/clientRepository.js' // unica coisa que muda é o import

export default class Service{

    async get(req, res, relations){
        try{
            const object = await repository.find(relations)
            return res.status(200).send(object)
        } catch (error) {
            return res.status(400).send({message: error.message})
        }
    }
    async getBy(req, res, param, relations){
        try{
            const object = await repository.findBy(param, relations)
            return res.status(200).send(object)
        } catch (error) {
            return res.status(400).send({message: error.message})
        }
    }
    async create(req, res){
        try{
            const object = await repository.save(req)
            return res.status(200).send(object)
        } catch (error) {
            return res.status(400).send({message: error.message})
        }
    }
    async update(req, res, param){
        try{
            const object = await repository.update(param, req)
            return res.status(200).send(object)
        } catch (error) {
            return res.status(400).send({message: error.message})
        }
    }
    async delete(req, res, param){
        try{
            await repository.delete(param)
            return res.status(200).send({})
        } catch (error) {
            return res.status(400).send({message: error.message})
        }
    }
}