import {fastify} from 'fastify'
import {DatabasePostgres} from './database.js'

const server = fastify();
const database = new DatabasePostgres

server.post('/games', async (req, res) => {
  const {title, description, imgUrl, qtdPlayers, price} = req.body

  await database.create({
    title,
    description,
    imgUrl,
    qtdPlayers,
    price
  })

  return res.status(201).send()
})

server.get('/games', async (req) => {
  const search = req.query.search

  const games = await database.list(search)

  return games
})

server.put('/games/:title', async (req, res) => {

})

server.delete('/games/:title', async (req, res) => {

})

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3000,
})