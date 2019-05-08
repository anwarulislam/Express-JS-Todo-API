const Router = require('express').Router()

// list 
Router.get('/', (req, res) => {
    res.send('get all task')
})

// create
Router.post('/', (req, res) => {
    res.send('created task')
})

// get single task
Router.get('/:_id', (req, res) => {
    res.send('get single question')
})


// update
Router.put('/:_id', (req, res) => {
    res.send('updated task')
})

// delete
Router.delete('/:_id', (req, res) => {
    res.send('delete task')
})



module.exports = Router