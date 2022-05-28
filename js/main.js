
document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data)
  
  pokemon = data

  function getPokemon (poke ) {
    let random =[Math.round(Math.random() * (data.length-1))]
    pokemon1 = data[random]
    pokemon.splice(random, 1)
  }
  getPokemon(pokemon)

  function getPokemon2 (poke ) {
    let random =[Math.round(Math.random() * (data.length-1))]
    pokemon2 = data[random]
    pokemon.splice(random, 1)
  }
  getPokemon2(pokemon)


  // let pokemon1 = data[Math.ceil(Math.random() * (data.length-1))]
  
  console.log(pokemon)

  // do{ let pokemon2 = data[Math.round(Math.random() * (data.length-1))]}
  // while (JSON.stringify(pokemon1) === JSON.stringify(pokemon2))
  
  // This will remove elements wont work untill make rounds 
  // data.forEach((element, index) => {
  //   if (JSON.stringify(pokemon1) || JSON.stringify(pokemon2) == JSON.stringify(element)){
  //     data.splice(i,1)
  //   }
  //   console.log(data)
  // })

  document.querySelector("#left-person").textContent = pokemon1.name
  document.querySelector("#image-left").src = pokemon1.imageUrl
  document.querySelector("#right-person").textContent = pokemon2.name
  document.querySelector("#image-right").src = pokemon2.imageUrl

  document.querySelector('#clickMe').style.display = 'none'

  document.querySelector('#fightMe').style.display = 'block'
  document.querySelector('#fightMe').addEventListener('click', fight)
  


  function fight() {
    if(Math.round(Math.random()*1) == 0){
      winner = pokemon1
      let random =[Math.round(Math.random() * (data.length-1))]
      pokemon2 = data[random]
      pokemon.splice(random, 1)
    document.querySelector("#right-person").textContent = pokemon2.name
    document.querySelector("#image-right").src = pokemon2.imageUrl
    }else{
      winner = pokemon2
      let random =[Math.round(Math.random() * (data.length-1))]
    pokemon1 = data[random]
    pokemon.splice(random, 1)
    document.querySelector("#left-person").textContent = pokemon1.name
    document.querySelector("#image-left").src = pokemon1.imageUrl
    }
    
  }



  
}

// This will remove elements wont work untill make rounds 


  // document.querySelector('#fightMe').addEventListener('click', fight)


  // function fight() {

  // }