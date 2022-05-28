document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#right-person").textContent = data[2].name
  document.querySelector("#left-person").textContent = data[3].name
  // document.querySelector("#image-left").scr = `'${data[2].imageUrl}'`
  document.querySelector("#image-left").src = data[2].imageUrl
  document.querySelector("#image-right").src = data[3].imageUrl

  // document.querySelector("#personOccupation").textContent = data.currentOccupation
}
