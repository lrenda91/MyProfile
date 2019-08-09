const dbManager = require('./dbManager')

function test() {
    dbManager.usingConnection(function () {
        console.log('Test done')
    })
}

module.exports = {
    testConnection: test
}