import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectdb.js";
import cors from "cors"
import bodyParser from "body-parser";
import cardRouter from "./routes/cardRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000

const app = express()

connectDB()

app.use(cors())
app.use(express.json());
// app.use(bodyParser.json())
app.use('/api', cardRouter)






app.get("/", (req, res) => {
    res.send("Server is running ")
})

app.listen(port, () => {
    console.log(`Server is on at http://localhost:${port}`)
})