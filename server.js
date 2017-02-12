const express = require('express'),
  bodyParser = require('body-parser');
const initialize = require('./init');

const app = new express();

app.use(bodyParser.json());

const apiRouter = new express.Router();

initialize();
