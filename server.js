const express = require('express')
const path = require('path')

const app = express()

const config = require('./config')
console.log(config)

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/profile-client'))

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/profile-client/index.html'))
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080)

var mongo = require('./mongo')

mongo.testConnection()