import {sql} from './dbNeon.js'
import {randomUUID} from 'node:crypto'

export class DatabasePostgres{
  async list (search) {
    let games

    if(search){
      games = await sql`
        select * from games where tite ilike ${"%" + search + "%"}
      `
    } else {
      games = await sql`select * from games`
    }

    return games


  } 

  async create (game) {
    const gameId = randomUUID()
    const {title, description, imgUrl, qtdPlayers, price} = game

    await sql`
      insert into games (id, title, description, imgUrl, qtdPlayers, price) VALUES (${gameId}, ${title},${description},${imgUrl}, ${qtdPlayers} ${price})
    `
  }

  async update() {

  }

  async delete () {

  }
}