document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data)
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))
  console.log(Math.floor(Math.random() * (data.length-1)))

  console.log(Math.floor(Math.random() * (data.length-1)))
  

  // let pokemon1 = data[Math.ceil(Math.random() * (data.length-1))]
  let pokemon1 = data[Math.round(Math.random() * (data.length-1))]
  let pokemon2 = data[Math.round(Math.random() * (data.length-1))]
  console.log(pokemon1)
  console.log(pokemon2)
  if(JSON.stringify(pokemon1) === JSON.stringify(pokemon2)){
    let pokemon2 = data[Math.round(Math.random() * (data.length-1))]
  }
  if(JSON.stringify(pokemon1) === JSON.stringify(pokemon2)){
    let pokemon2 = data[Math.round(Math.random() * (data.length-1))]
  }
  if(JSON.stringify(pokemon1) === JSON.stringify(pokemon2)){
    let pokemon2 = data[Math.round(Math.random() * (data.length-1))]
  }
  if(JSON.stringify(pokemon1) === JSON.stringify(pokemon2)){
    let pokemon2 = data[Math.round(Math.random() * (data.length-1))]
  }
  
  
  console.log(JSON.stringify(pokemon2))
  console.log(JSON.stringify(pokemon1))

  document.querySelector("#left-person").textContent = pokemon1.name
  document.querySelector("#image-left").src = pokemon1.imageUrl
  document.querySelector("#right-person").textContent = pokemon2.name
  document.querySelector("#image-right").src = pokemon2.imageUrl
  


  // document.querySelector("#personOccupation").textContent = data.currentOccupation
}
