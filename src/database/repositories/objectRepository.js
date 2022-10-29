import Object from '../../entities/Object.js' // unica coisa que muda é o import
import { AppDataSource } from "../connection.js"

export const repository = AppDataSource.getRepository(Object)