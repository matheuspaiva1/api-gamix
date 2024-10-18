import {sql} from './dbNeon.js';

sql`
  CREATE TABLE games (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    imgUrl TEXT,
    qtdPlayers INTEGER,
    price INTEGER
  );
`.then(()=> {
  console.log('tabela criada')
})