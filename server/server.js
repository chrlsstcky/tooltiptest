import Express from 'express'
import pug from 'pug'
import path from 'path'
import bodyparser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const app = Express()
let middleware;

//---------------------------HMR settings---------------------------------

let webpack = require('webpack');
let webpackConfig = require('../webpack.config.js')
let compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: false, publicPath: webpackConfig.output.publicPath
})); 

app.use(middleware = webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use(Express.static(__dirname + '/../dist'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../dist'))

app.use(bodyparser.json())

app.use('*', (req, res)=>{
  res.render('index')
})

app.listen('8080', ()=>{
  console.log('listening on port 8080')
})
