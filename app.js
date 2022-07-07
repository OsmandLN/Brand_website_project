// require express.js
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// require express-handlebars
const exphbs = require('express-handlebars')

// require the data
const stadiumList = require('./stadiums.json')
const activityList = require('./activity-list.json')
const agentItems = require('./agent-items.json')

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  res.render('index', {
    style: 'index.css',
    script: 'index.js'
  })
})

app.get('/stadiums-rental', (req, res) => {
  res.render('stadiums-rental', {
    style: 'stadiums-rental.css',
    stadiums: stadiumList.results
  })
})

app.get('/activities-held', (req, res) => {
  res.render('activities-held', {
    style: 'activities-held.css',
    script: 'activities-held.js',
    activities: activityList.results
  })
})

app.get('/players-agent', (req, res) => {
  res.render('players-agent', {
    style: 'players-agent.css',
    script: 'players-agent.js',
    items: agentItems.results
  })
})

// listen on the Express server
app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}.`)
})

// setting static files
app.use(express.static('public'))