'use strict';

var fs = require('fs');
var path = require('path');

function readSql(dirname, filepath, callback) {
  var sql = path.join(dirname, filepath);

  fs.readFile(sql, 'utf-8', callback);
}

module.exports = readSql;
