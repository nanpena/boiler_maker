// the begining point for server javascript // 
const {db} = require('./database/models') 
const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('dev')) 

//static file-serving middleware // 
const path = require('path')
app.use(express.static(path.join(__dirname,'..','public')))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.use('/api', require('./api'))

// send index.html on brower 
// make sure this is after all of your routes in your server entry file 
app.get('*', function (req,res){
    res.sendFile(path.join(__dirname,'..','/public/index.html'))
})

// set up for page Error //
app.use(function(err, req,res,next) {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal Server Error! :(')
})

// port listenning // 
const port = process.env.PORT || 3000; 
app.listen(port, function () {
    console.log(`Your server is listening on port ${port}`)
})

// database sync // 
db.sync().then(()=> console.log(' db synced!'))

module.exports = app

