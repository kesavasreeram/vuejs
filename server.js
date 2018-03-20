const express = require('express')          // for express server
const fs = require('fs')                    // for file system
const path = require('path')
const expressServer = express()
const { createBundleRenderer } = require('vue-server-renderer')
const serialize = require('serialize-javascript')
const isProd = typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV === 'production')
let renderer

const indexHTML = (() => {
  // path.resolve returns the directory relative to this file and runs the server from that location
  // this makes sure that the relative path of file which we are trying to read is correct and the file is available (if it really is)
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

// when running the production code, we do not need to hot reload the code
// also we need to use dist folder as the root path
if (isProd) {
  expressServer.use('/', express.static(path.resolve(__dirname, './dist')))
  const bundlePath = path.resolve(__dirname, './dist/server/main.js')
  renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'))
} else {
  expressServer.use('/dist', express.static(path.resolve(__dirname, './dist')))
  require('./build/dev-server')(expressServer, bundle => {
    // every time the server bundle changes, we will receive a bundle and generate a new renderer
    renderer = createBundleRenderer(bundle)
  })
}

expressServer.get('*', (request, response) => {
  let context = { url: request.url }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      return response.status(500).send('Sever Error')
    }
    html = indexHTML.replace('{{ APP }}', html)
    html = html.replace('{{ STATE }}', `<script>window.__INITIAL_STATE__=${serialize(context.initialState, { isJSON: true })}</script>`)
    response.write(html)
    response.end()
  })
  // response.write(indexHTML)
  // response.end()
})

const port = process.env.PORT || 3000
expressServer.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
