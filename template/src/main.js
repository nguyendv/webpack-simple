import Vue from 'vue'
import App from './App.vue'
import express from 'express'
import VueSSR from 'vue-server-renderer'

server = express()
renderer = VueSSR.createRenderer()

let vm = new Vue({
  el: '#app',
  render: h => h(App)
})

server.get('*', (req, res) => {
  renderer.renderToString(vm, (err, html) => {
    if (er) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)
