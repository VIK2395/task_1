const fetchDataBtn = document.getElementById('fetchDataBtn');

async function fetchData() {
  // (algorithm , [root, firstfield, secondfield])
  // const url = `http://localhost:5000/sort?algorithm=${algorithm}&root=Statistics&firstfield=Flights&secondfield=Total`;

  // sort
  // const response = await fetch('http://localhost:5000/sort?algorithm=selection');
  // search
  const response = await fetch('http://localhost:5000/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      target: 'MCO',
    }),
  });

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

fetchDataBtn.addEventListener('click', logData);
