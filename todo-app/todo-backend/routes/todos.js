const express = require('express');
const { Todo } = require('../mongo');
const { getAsync, setAsync } = require('../redis');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  const added_todos = await getAsync('added_todos')
  await setAsync('added_todos', Number(added_todos) + 1)
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)
  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await Todo.findByIdAndDelete(req.todo._id);
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const { todo } = req
  res.send(todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { todo } = req
  const { text, done } = req.body
  await Todo.findByIdAndUpdate(todo.id, {
    text,
    done
  })
  res.sendStatus(200);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;