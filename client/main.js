const makeRequestBtn = document.getElementById('makeRequestBtn');

async function fetchData() {
  // const { algorithmtype, algorithmname, field, order, target } = req.query;

  const response = await fetch(`http://localhost:5000/algorithm?algorithmtype=${}&algorithmname=${}&field=${}&order=${}&target=${}`);
  const data = await response.json();
  return data;
}

async function logData() {
  const data = await fetchData();
  const root = document.querySelector('.root');
  root.innerHTML = `<pre style="word-wrap: break-word; white-space: pre-wrap; margin: 0px 20px">${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
}

makeRequestBtn.addEventListener('click', logData);
