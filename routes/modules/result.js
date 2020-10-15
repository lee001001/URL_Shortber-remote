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

  /*
  let shortURL = ''
  shortURL = `${origin}/${generateShortUrl()}`
  console.log('shortUrl:', shortURL)
  res.render('generated', { origin, shortURL })
  */
  Url.find()
    .lean()
    // 看URL資料庫是否有相同網址,如果沒有產生新的短網址
    .then(urls => {
      const checked = urls.some(url => url.origin === origin)
      if (checked) {
        const index = urls.findIndex(url => url.origin === origin)
        console.log(index)
        console.log(urls[index].shortURL)
        shortURL = urls[index].shortURL
      } else {
        shortURL = `${origin}/${generateShortUrl()}`
        Url.create({ origin, shortURL })
      }
      res.render('generated', { origin, shortURL })
    })
    .catch(error => console.log(error))
})

module.exports = router
