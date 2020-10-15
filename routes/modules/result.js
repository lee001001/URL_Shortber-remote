const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const generateShortUrl = require('../../generate_shorturl')

router.post('/', (req, res) => {
  const origin = req.body.origin
  console.log(origin)
  console.log(req.protocol) // http
  console.log(req.get('host')) // local:3000

  let shortURL = ''
  shortURL = `${origin}/${generateShortUrl()}`
  console.log('shortUrl:', shortURL)
  res.render('generated', { origin, shortURL })
})

module.exports = router
