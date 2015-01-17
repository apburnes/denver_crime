'use strict';

var fs = require('fs');
var path = require('path');

var query = require('../query');
var loadCSV = require('../util/loadCSV');

var dataDir = path.join(__dirname, '../data');

exports.up = function(success, error) {
  fs.readdir(dataDir, function(err, files) {
    if (err) {
      error(err);
    }

    var count = 0;
    var total = files.length;

    files.forEach(function(file) {
      var tableName = file.split('.')[0];
      var filePath = path.join(dataDir, file);

      loadCSV(tableName, filePath, function(err) {
        if (err) {
          error(err);
        }

        var counter = ++count;

        if (counter === total) {
          success();
        }
      });
    });

  });
};

function truncate(files) {
  var stringed = files.map(function(file){
    var table = file.split('.')[0];
    return table;
  }).join(', ');

  var sql = 'TRUNCATE ' + stringed + ';';

  return query(sql);
}

exports.down = function(success, error) {
  fs.readdir(dataDir, function(err, files) {
    if (err) {
      error(err);
    }

    truncate(files)
      .then(success)
      .catch(error);
  });
};
