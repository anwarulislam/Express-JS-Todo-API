const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {
        task: {
            type: String,
            trim: true,
            required: [true, 'Task must be filled up']
        },
        done: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Todo', todoSchema)