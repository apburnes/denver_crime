'use strict';

var pgQuery = require('pg-query');
var connString = require('../config').get('url').env;

pgQuery.connectionParameters = connString;

module.exports = pgQuery;
