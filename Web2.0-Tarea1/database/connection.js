let appConfig = require('./../configs/app')

let knexfile = require('../knexfile')

const knex = require('knex')(knexfile[appConfig.env])

module.exports = knex
