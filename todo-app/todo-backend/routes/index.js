const express = require('express');
const router = express.Router();
const configs = require('../util/config');
const { getAsync, setAsync } = require('../redis');
const { Todo } = require('../mongo');

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics on added todoss. */
router.get('/statistics', async (req, res) => {
  let added_todos = await getAsync('added_todos')
  if (!added_todos) {
    await setAsync('added_todos', 0)
    added_todos = await getAsync('added_todos')
  }

  res.send({
    added_todos
  });
});

module.exports = router;
