const express = require('express');
const router = express.Router();

const configs = require('../util/config');
const { getAsync } = require('../redis');

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
  const added_todos = await getAsync('added_todos')
  res.send({
    added_todos
  });
});

module.exports = router;
