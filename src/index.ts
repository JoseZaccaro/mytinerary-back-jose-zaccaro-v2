import 'module-alias/register';
import 'dotenv/config'
import express from "express";
import mainRouter from "./routes";
import databaseConnection from "./config/database";


const app = express()
databaseConnection(process.env.MONGO_URL || "mongodb://localhost:27017","mytinerary-v2")

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Helloo",
        status: 200
    })
})

app.use('/api', mainRouter)

const PORT = Number(process.env.PORT) || 3000
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, () => { console.log('Server listen on port ' + PORT + ' at ' + HOST) })