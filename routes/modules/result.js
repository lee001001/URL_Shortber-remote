const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.post('/', (req, res) => {
  const origin = req.body.origin
  console.log(origin)
  Url.create({ origin })
    .then(() => res.render('generated', { origin }))
    .catch(error => console.log(error))
})

module.exports = router
