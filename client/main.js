const getDataBtn = document.getElementById('getDataBtn');

async function getData() {
  const response = await fetch('http://localhost:5000/');
  const grid = await response.json();
  console.log('fetched grid: ', grid);
}

getDataBtn.addEventListener('click', getData);
