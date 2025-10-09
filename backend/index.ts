import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db'
import authRoutes from './routes/auth.routes'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes)

app.get('/', (req,res) => {
    res.send("Server is running")
})

// Start HTTP server
const PORT = process.env.PORT || 3000
const server = http.createServer(app)

connectDB().then(() => {
    server.listen(PORT, () => {
        console.log("Server is running", PORT)
    })
}).catch((error) => {
    console.log("Error connecting to DB:", error)
})
