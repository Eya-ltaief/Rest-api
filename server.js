// require express
const express = require('express')

// instance of express methods
const app = express()

// require and configure dotenv
require('dotenv').config()

// Middleware bodyparser (express json)
app.use(express.json())

// require connectio DB
const connectDB = require('./config/connectDB')
connectDB()

// Routes
app.use('/api/contacts', require('./routes/contacts'))

// create server
const PORT = process.env.PORT
app.listen(PORT, error => error ? console.error(`can not connect to server : ${error}`): console.log(`Server is running on http://localhost:${PORT} ....`)
)
    

