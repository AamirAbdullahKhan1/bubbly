import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send("Server is running")
})

// Start HTTP server
const PORT = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`)
})