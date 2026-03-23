require('dotenv').config()

const express = require('express')
const cors = require('cors')

// Import query from db.js
const { query } = require('./helpers/db')

const todoRouter = require('./routes/todo')

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT

// ---------------- TEMP: Create task table if it does not exist ----------------
const createTableQuery = `
CREATE TABLE IF NOT EXISTS task (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);
`;

query(createTableQuery)
  .then(() => console.log("Task table ready"))
  .catch(err => console.log("Error creating table:", err))

// USE ROUTES
app.use("/", todoRouter)

app.listen(port, () => {
    console.log("Server running on port " + port)
})