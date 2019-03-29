import path from 'path';
import express from 'express';
import webpack from 'webpack';
import fs from 'fs';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import PORT from './port.js';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res, next) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, result) => {
    if (err) {
      return next(err);;
    }
    res.set('content-type', 'text/html');
    res.send(result.toString());
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
