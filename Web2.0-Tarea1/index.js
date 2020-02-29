
const extNameHbs = 'hbs' //terminacion de archivos handlebars
let express = require('express')
let app = express()
let appRoutes = require('./routes/app')
let exphbs = require('express-handlebars')
let hbs = exphbs.create({extname: extNameHbs})
let appConfig = require('./configs/app')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended:true }))

app.engine(extNameHbs, hbs.engine)

app.set('view engine', extNameHbs)

app.use('/', appRoutes)

// backslash \ for printing special characters
app.listen(appConfig.express_port, () => {
  let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port + ')'
  console.log('It\'s alive! ' + show)
})
