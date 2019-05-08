const Router = require('express').Router()
const { todoList, createTodo, deleteTodo, updateTodo } = require('../controllers/TodoController')

// list 
Router.get('/', todoList)

// create
Router.post('/', createTodo)

// get single task
Router.get('/:_id', (req, res) => {
    res.send('get single question')
})


// update
Router.put('/:_id', updateTodo)

// delete
Router.delete('/:_id', deleteTodo)



module.exports = Router