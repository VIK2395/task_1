const makeRequestBtn = document.getElementById('makeRequestBtn');

async function fetchData() {
  // const { algorithmtype, algorithmname, field, order, target } = req.query;

  const algorithmType = 'search'; // sort | search
  const algorithmName = 'linearwithsubstring'; // bubble | selection | quick || linear | linearwithsubstring | binary | binarywithsubstring
  const field = 'Airport'; // Airport | Flights | Year | Month
  const order = 'asc'; // asc | desc
  const target = 'Washington'; // any string

  const response = await fetch(
    `http://localhost:5000/algorithm?algorithmtype=${algorithmType}&algorithmname=${algorithmName}&field=${field}&order=${order}&target=${target}`
  );
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

// bubble: O(n^2)
// selection: O(n^2)
// quick: O(n*log n)

// linear: O(n)
// binary: O(log n)
// binary with quick sorting: O(n*log n) + O(log n) = O((n+1)*log n) = O(n*log n)

// n = 9
// linear: O(n) = 9
// binary with quick sorting: O(n*log n) = 9*3 = 27

// n = 90 000
// linear: O(n) = 90 000
// binary with quick sorting: O(n*log n) = 90 000*300 = 27 000 000
