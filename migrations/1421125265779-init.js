'use strict';

var query = require('../query');
var readSql = require('../util/readSql');

var sqlUp = '../migrationsSql/initUp.sql';
var sqlDown = '../migrationsSql/initDown.sql';

exports.up = function(success, error) {
  readSql(__dirname, sqlUp, function(err, data) {
    if (err) {
      return error(err);
    }

    return query(data)
      .then(success)
      .catch(error);
  });
};

exports.down = function(success, error) {
  readSql(__dirname, sqlDown, function(err, data) {
    if (err) {
      return error(err);
    }

    return query(data)
      .then(success)
      .catch(error);
  });
};
