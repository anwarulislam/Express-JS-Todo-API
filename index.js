// import express
const express = require('express')
//initial express app
const app = express()
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//connect database
require('./dbconnect')

//run express server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})

const routerTodos = require('./routes/todos')

// we can use route prefix in front of routerTodos
app.use(routerTodos)