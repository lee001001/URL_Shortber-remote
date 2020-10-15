const express = require('express')
const methodOverride = require('method-override')
const app = express()

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.send('Hello world')
})

// 設定PORT 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
