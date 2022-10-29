import { repository } from '../database/repositories/clientRepository.js' // unica coisa que muda é o import

export default class Service{

    async get(relations){
        try{
            const object = await repository.find(relations)
            return object
        } catch (error) {
            return {message: error.message}
        }
    }
    async getBy(param, relations){
        try{
            const object = await repository.findBy(param, relations)
            return object
        } catch (error) {
            return {message: error.message}
        }
    }
    async create(body){
        try{
            const object = await repository.save(body)
            return object
        } catch (error) {
            return {message: error.message}
        }
    }
    async update(body, param){
        try{
            const object = await repository.update(param, body)
            return object
        } catch (error) {
            return {message: error.message}
        }
    }
    async delete(param){
        try{
            await repository.delete(param)
            return {message: deleted}
        } catch (error) {
            return {message: error.message}
        }
    }
}