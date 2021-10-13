
const fs = require('fs');
// const { getEnvironmentData } = require('worker_threads');
const path = process.argv[2];
const async = require('async');
async.waterfall([
  function (callback) {
    fs.exists(path, (exists) => {
      callback(null, exists)
    });
  },
  function (exists, callback) {
    if (exists) {
      fs.stat(path, (err, stats) => {
        if (err) {
          callback(new Error('Error trying to get stats'));
        } else {
          callback(null, stats);
        }
      })
    }
  },
  function (stats, callback) {
    console.log(stats);
    if (stats.size > 0) {
      fs.readFile(path, (err, buffer) => {
        if (err) {
          return callback(new Error('Error trying to get stats'));
        } else {
          callback(null, buffer);
        }
      })
    } else {
      callback(new Error('File exists but there is no content'));
    }
  }
], function (err, result) {
  if (err) {
    return console.log(err);
  } else {
    console.log("result=====>", result);
  }
});