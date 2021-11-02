const express = require('express');

const router = express.Router();

const { search } = require('../controllers');

router.get('/', (req, res) => {
  res.json({ message: 'API Server started successfully' });
});

router.post('/search', async (req, res) => {
  const result = await search(req.query);
  res.json({
    message: 'Show users and repositories or issues',
    result,
  });
});

router.delete('/clear-cache', (req, res) => {
  res.json({ message: 'Show users and repositories or issues' });
});

module.exports = router;
