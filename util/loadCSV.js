'use strict';

var fs = require('fs');

var query = require('../query');
var copyFrom = require('pg-copy-streams').from;

function loadCSV(destTable, filePath, done) {
  var stream = query(copyFrom('COPY ' + destTable + ' FROM STDIN CSV HEADER DELIMITER \',\';'));
  var fileStream = fs.createReadStream(filePath);

  fileStream.on('error', done);

  fileStream
    .pipe(stream)
    .on('finish', done)
    .on('error', done);
}

module.exports = loadCSV;
