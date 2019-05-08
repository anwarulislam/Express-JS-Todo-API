// import express
const express = require('express')
//initial express app
const app = express()
require('dotenv').config()

//connect database
require('./dbconnect')

//run express server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})

const routerTodos = require('./routes/todos')
app.use(routerTodos)