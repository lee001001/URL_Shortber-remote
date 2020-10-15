const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const origin = req.body.origin
  console.log(origin)
  Url.create({ origin })

})

module.exports = router
