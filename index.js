const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const TodoModel = require('./Modals/Todo')
// import  TodoModel from './Modals/Todo'
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test', )

app.post('/add', (req, res) => {
    const task = req.body.task;
    console.log("task", task)
    TodoModel.create({
        task: task
    })
    .then(result => res.json(result))
    .catch(error => res.json(error));
})

app.get('/get', (req, res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.put('/update/:id', (req, res) =>{
    const {id} = req.params;
    console.log("id", id)
    TodoModel.findByIdAndUpdate({_id: id}, {done:true})
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.put('/delete/:id', (req, res) =>{
    const {id} = req.params;
    console.log("id", id)
    TodoModel.findByIdAndDelete({_id: id}, {done:true})
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.listen(3001, ()=> {
    console.log("Connected Successfully");
})