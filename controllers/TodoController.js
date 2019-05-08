const Todo = require('../models/Todo')

module.exports.todoList = async (req, res) => {

    let todos = await Todo.find(req.query)

    if (todos.length === 0) {
        return res.status(404).json({
            message: 'No todo found'
        })
    }
    res.json(todos)
}

module.exports.createTodo = (req, res) => {
    const todo = new Todo({
        task: req.body.task
    })

    todo.save().then(doc => {
        res.json(doc)
    })
}

module.exports.deleteTodo = (req, res) => {
    const { _id } = req.params
    Todo.findByIdAndRemove(_id).then(doc => res.json(doc))
}

module.exports.updateTodo = (req, res) => {
    const { _id } = req.params
    Todo.findByIdAndUpdate(_id, {
        $set: {
            task: req.body.task,
            done: req.body.done
        },
    }, { new: true }).then(doc => res.json(doc))
}