const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        class Pokemon {
          constructor(name, type, imageUrl) {
            this.name = name
            this.type = type
            this.imageUrl = imageUrl 
          }
        }
        const pikachu = new Pokemon('Pikachu', 'Electric',  '/images/pika.png')
        const bulbasaur = new Pokemon('Bulbasaur', 'Grass',  '/images/bulb.png')
        const squirtle = new Pokemon('Squirtle', 'Water',  '/images/squirt.png')
        const charmander = new Pokemon('Charmander', 'Fire', '/images/char.png')
        const blastoise = new Pokemon('Blastoise', 'Water', '/images/blastoise.png')
        const snorlax = new Pokemon('Snorlax', 'Normal',  '/images/snorlax.png')
        let pokemons = [pikachu, bulbasaur, squirtle, charmander, blastoise, snorlax]
        let pokemon1 = pokemons[Math.floor(Math.random() * pokemons.length)]
        let pokemon2 = pokemons[Math.floor(Math.random() * pokemons.length)]


        res.end(JSON.stringify(pokemons));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/images/snorlax.png'){
    fs.readFile('./images/snorlax.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png' });
       res.write(data);
      res.end();
    });
  }
  else if (page == '/images/squirt.png'){
    fs.readFile('./images/squirt.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png' });
       res.write(data);
      res.end();
    });
  }
  else if (page == '/images/pika.png'){
    fs.readFile('./images/pika.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png' });
       res.write(data);
      res.end();
    });
  }
  else if (page == '/images/bulb.png'){
    fs.readFile('./images/bulb.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png' });
       res.write(data);
      res.end();
    });
  }
  else if (page == '/images/char.png'){
    fs.readFile('./images/char.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png' });
       res.write(data);
      res.end();
    });
  }
  else if (page == '/images/blastoise.png'){
    fs.readFile('./images/blastoise.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png' });
       res.write(data);
      res.end();
    });
  }
  else if (page == '/images/background.jpg'){
    fs.readFile('./images/background.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg' });
       res.write(data);
      res.end();
    });
  }else if (page == '/css/style2.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

