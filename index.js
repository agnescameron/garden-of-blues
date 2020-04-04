const { createProxyMiddleware } = require('http-proxy-middleware');
const Bundler = require('parcel-bundler')
const express = require('express')
const fetch = require('node-fetch')

// const bundler = new Bundler('src/site/index.html', {
//   cache: false
// })

const app = express()

app.use(
  '/.netlify/functions',
  createProxyMiddleware({
    target: 'http://localhost:9000',
    pathRewrite: {
        '^/\.netlify/functions':''
    }
  })
)


//routing
app.get('/', function (request, response) {
  fetch("http://localhost:9000/.netlify/functions/fetch")
  .then(function(res) {
      return res.json();
  })
  .then(function(data){
    response.json(data)
  })
})

app.get('/about', function (request, response) {
  response.end('Welcome to the about page!')
})

app.listen(Number(process.env.PORT || 1234), function() {
  console.log('server listening on port 1234')
})