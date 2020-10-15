const express = require('express')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const routes = require('./routes')

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(routes)

// 設定PORT 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
