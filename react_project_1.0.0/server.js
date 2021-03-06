const http = require('http');
const express = require('express');
const app = express();
const mysql = require('mysql');
// var fs = require('fs');
//
// var toJSON = require('plain-text-data-to-json');
//
// var doc = fs.readFileSync('./sample_movies.txt', 'utf8');
//
// var data = toJSON(doc);
//
// fs.writeFileSync('output.json', JSON.stringify(data, null, 2) + '\n');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'timon',
  password : 'the1992',
  database: 'films_db'
});

var query = connection.query('INSERT INTO users SET ?', {name: 'Igor', surname: 'Tymonchuk'}, function(err, result) {
  console.log(err);
  console.log(result);
});


(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '/'));
})();

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
