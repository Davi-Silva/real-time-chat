const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    response: 'server is up and runnig'
  });
});

module.exports = router;