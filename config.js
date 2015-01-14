'use strict';

var conf = require('convict')({
  url: {
    doc: 'Postgresql Connection String',
    format: 'connection string',
    env: process.env.DENVER_CRIME
  }
});

conf.validate();

module.exports = conf;
