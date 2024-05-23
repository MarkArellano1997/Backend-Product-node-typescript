import express from "express"
import colors from 'colors'
import router from "./router"
import db from "./config/db"

//Conectar a base de datos

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green('Conexión exitosa a la DB'))
        
    } catch (error) {
        // console.log('Error');
        console.log(colors.red.bold('Hubo un error al conectar la DB'));
        
    }
}

connectDB()

//Instancia de express
const server = express()

//leer datos de formularios
server.use(express.json())

server.use('/api/products', router)


export default server