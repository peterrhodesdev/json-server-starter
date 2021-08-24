var fs = require('fs');
var db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));

module.exports = db;
