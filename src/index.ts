import 'module-alias/register';
import 'dotenv/config'
import express from "express";
import mainRouter from "./routes";
import databaseConnection from "./config/database";
import { swaggerFile, swaggerUi } from './swagger';

const app = express()
databaseConnection(process.env.MONGO_URL || "mongodb://localhost:27017", "mytinerary-v2")

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => {
    res.status(200).send("Helloo")
})

app.use('/api', mainRouter)

export const PORT = Number(process.env.PORT) || 3000
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, () => { console.log('Server listen on port ' + PORT + ' at ' + HOST) })