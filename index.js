require('dotenv').config()

const express = require('express')
const cors = require('cors')

// Import query from db.js

const todoRouter = require('./routes/todo')

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT

// ---------------- TEMP: Create task table if it does not exist ----------------

// USE ROUTES
app.use("/", todoRouter)

app.listen(port, () => {
    console.log("Server running on port " + port)
})