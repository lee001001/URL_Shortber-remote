const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  console.log('get informatiom')
  console.log('req.body', req.body)
  res.render('generated')
})

module.exports = router
