const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/todos', async (req, res, next) => {
    // get placeholder
    try {

      const actions = await Todo.find({}, 'action');
      
      res.json(actions);
    } catch (e) {
      console.log(e);
    }
});

router.post('/todos', async (req, res, next) => {
    // post placeholder
    try {

      if (req.body) {
        const todoCreated = await Todo.create(req.body);

        res.json(todoCreated);
      } else throw new Error('The input field is empty');

    } catch (e) {
      console.log(e)
    }
});

router.delete('/todos/:id', async (req, res, next) => {
    // delete placeholder
    try {

      const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id });

      res.json(deletedTodo);
    } catch (e) {
      console.log(e)
    }
});

module.exports = router;