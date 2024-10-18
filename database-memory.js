import {randomUUID} from 'node:crypto'

export class DatabaseMemory{
  #games = new Map();

  list(search){
    return Array.from(this.#games.entries())
    .map((gameArray) => {
      const id = gameArray[0]
      const data = gameArray[1]

      return {
        id,
        ...data
      }
    })
    .filter(game => {
      if(search){
        return game.title.includes(search)
      } 
      return true
    })
  }

  create(game) {
    const gameId = randomUUID()
    this.#games.set(gameId, game)
  }

  update(){

  }

  delete(){
    
  }
}