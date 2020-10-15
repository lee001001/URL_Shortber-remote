const express = require('express')
const router = express.Router()
const generateShortUrl = require('../../generate_shorturl')
const Url = require('../../models/url')

router.post('/', (req, res) => {
  const origin = req.body.origin
  return Url.create({ origin })
  res.render('generated', origin)
})

module.exports = router
