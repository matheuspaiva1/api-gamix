import {fastify} from 'fastify'
import {DatabasePostgres} from './database.js'

const server = fastify();
const database = new DatabasePostgres

server.post('/games', async (req, res) => {

})

server.get('/games', async (req, res) => {

})

server.put('/games/:title', async (req, res) => {

})

server.delete('/games/:title', async (req, res) => {

})

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3000,
})