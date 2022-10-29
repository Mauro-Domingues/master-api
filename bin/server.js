import app from '../src/app.js'

/*import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
console.log(__filename.split(/[\\/]/).pop().slice(0, -3))*/

const port = normalizaPort(process.env.PORT || '3000')

function normalizaPort(val) {
    const port = parseInt(val, 10)
    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

app.listen(port, function () {
    console.log(`Rodando em http://localhost:${port}`)
})