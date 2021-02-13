const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const config = require('./utils/config')

app.get('/', (_req, res) => {
  res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket) => {
  console.log("A user connected")
  console.log(socket.id)
})

http.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`)
})