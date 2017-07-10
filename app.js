'use strict'

const restify = require('restify')
const app = restify.createServer()
const io = require('socket.io')(app.server)

app.use(restify.plugins.bodyParser())

app.get('/', (req, res) => {
    res.json({message: 'olar'})
})

app.post('/', (req, res) => {
    res.json({message: 'olar 3'})
})

io.on('connection', socket => {
    console.log('Usuario conectado')    
    socket.on('disconnect', () => console.log('Usuario disconectado') )
    socket.on('save-message', data => {
        console.log(data)
        io.emit('new-message', { message: data }) 
    })
})

app.listen(3000)