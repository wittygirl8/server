const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    },
    is_Deleted: {
        type: Boolean,
        default: false
    }
})
const TodoModel = mongoose.model("todos", TodoSchema)
module.exports =  TodoModel