const express = require('express')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(routes)
app.use(methodOverride('_method'))

// 設定PORT 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
