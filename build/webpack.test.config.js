const base = require('./webpack.base.config')

let config = Object.assign({}, base, {})

// no need for the app entry during tests. so lets delete it
delete config.entry

module.exports = config
