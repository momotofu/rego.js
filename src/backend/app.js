const express = require('express'),
      path = require('path'),
      fs = require('fs'),
      promiseRouter = require('express-promise-router'),
      registerAPI = require('./controllers/api')


// set up express app
const router = promiseRouter()
const app = express()
  .use(router)
  .set('json spaces', 2)
  .set('view engine', 'pug')
  .set('views', path.join(__dirname, 'views'))

// register API
registerAPI(router)

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

app.listen(process.env.PORT || 9000, () => {
  console.log(`App - Listening on port ${process.env.PORT || 9000}!`)
})
