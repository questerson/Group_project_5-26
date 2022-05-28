document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data[2].name
  document.querySelector("#personStatus").textContent = data[1].name
  // document.querySelector("#image-left").scr = `'${data[2].imageUrl}'`
  document.querySelector("#image-left").src = data[2].imageUrl
  

  // document.querySelector("#personOccupation").textContent = data.currentOccupation
}
