const f = require('util').format

const MongoClient = require('mongodb').MongoClient
const config = require('../config').mongo

function wrap(fn) {
	var dbConnection
	MongoClient.connect(config.uri, { useNewUrlParser: true })
	.then(function(db) {
		dbConnection = db
		console.log("Database connected!")
	})
	.then(function () {
		return fn(dbConnection)
	})
	.then(function (result) {
	})
	.then(function () {
		dbConnection.close()
		console.log('Database connection closed!')
	})
	.catch(function (error) {
		console.log('error ' + error)
		dbConnection.close()
	})
}

module.exports = {
	usingConnection: wrap
}