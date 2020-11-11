var express = require('express');
var { get_all_tags } = require('../helpers/shopify');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Hello shopify');
});

router.get('/get-tags', async (req, res, next) => {
  res.json({
    all_tags: get_all_tags()
  })
});

module.exports = router;
