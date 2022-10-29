import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

export default (req, res, next) => {
    try{
        const userToken = req.headers.authorization
        const authToken = jwt.verify(userToken, process.env.SECRET)
        req.auth = authToken
        next()
    } catch(error){
        return res.status(401).send({message: "Você precisa autenticar primeiro"})
    }
}