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
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        // let flipRes = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails'
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'fight'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          class Pokemon {
            constructor(name, type){
              this.name = name
              this.type = type 
            }
          }
          // pokemonArray[0].name <----
          const pikachu = new Pokemon('pikachu', 'electric')
          const charizard = new Pokemon('charizard', 'fire')
          const bulbasaur = new Pokemon('bulbusaur', 'grass')
          const blastoise = new Pokemon('blastoise', 'water')
          const snorlax = new Pokemon('snorlax', 'normal')
          // const aquaJet = new Pokemon('Aqua Jet', 'water')
          // const bubble = new Pokemon('Bubble', 'water')
          

          let pokemonText = "whatever"
          let pokemonArray = [pikachu, charizard, bulbasaur, blastoise, snorlax]
          let pokemon1 = pokemonArray[Math.ceil(Math.random())*(pokemonArray.length)]
          let pokemon2 = pokemonArray[Math.ceil(Math.random())*(pokemonArray.length)]
          //  const objToJson = {
          //   name: "pikachu",
          //   type: "electric",
          //   currentOccupation: "Baller"
          // }
          res.end(JSON.stringify(pokemonText));
        }
      }//student != leon
    }//student if
  //else if
  else if (page == '/css/style.css'){
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
