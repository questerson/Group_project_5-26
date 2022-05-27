document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  console.log('hello world')
  const userName = document.querySelector("#userName").value;
  const userName2 = 'fight';
  const res = await fetch(`/api?student=${userName}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#personStatus").textContent = pokemonText
  // document.querySelector("#personName").textContent = data.name
  // document.querySelector("#personStatus").textContent = data.status
  // document.querySelector("#personOccupation").textContent = data.currentOccupation
}