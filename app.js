const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./confing/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(routes)

// 設定PORT 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
