require('dotenv').config()

const express = require('express')
const cors = require('cors')

const todoRouter = require('./routes/todo')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT


// USE ROUTES
app.use("/", todoRouter)


app.listen(port,()=>{

console.log("Server running on port " + port)

})