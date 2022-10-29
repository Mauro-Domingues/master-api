import express from 'express'
import cors from './middlewares/cors.js'
import objRoutes from './routes/objectRoutes.js'
import clientRoutes from './routes/clientRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors)
app.use(objRoutes)
app.use(clientRoutes)

export default app