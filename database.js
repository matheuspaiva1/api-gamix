import {sql} from './dbNeon.js'
import randomUUID from 'crypto'

export class DatabasePostgres{
  async list () {

  } 

  async create (video) {
    const gameId = randomUUID()
    const {title, description, imgUrl, qtdPlayers, price} = video

    await sql`
      insert into games (id, title, description, imgUrl, qtdPlayers, price) VALUES (${gameId}, ${title},${description},${imgUrl}, ${qtdPlayers} ${price})
    `
  }

  async update() {

  }

  async delete () {

  }
}