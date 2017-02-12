'use strict';
module.exports = initialize;
const glob = require('glob');

function initialize() {
  glob('./resources/**/model.js', {}, function(err, filepaths) {
    console.log('show err', err);
    console.log('show filepaths', filepaths);

  });
}
