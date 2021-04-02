import Grid from './grid.js';
import PopUpInfo from './autonomous-custom-element.js';

const createTableBtn = document.getElementById('createTableBtn');

async function fetchData() {
  const response = await fetch('http://localhost:5000/');
  const data = await response.json();
  return data;
}

const columns = [
  {
    field: 'id',
  },
  {
    field: 'name',
    title: 'Person',
  },
  {
    field: 'job',
    title: 'Job',
  },
  {
    field: 'country',
    title: 'Country',
  },
];

async function createTable() {
  const data = await fetchData();
  const table = new Grid(columns, data, 'Table Caption');
  table.render('root');
}

createTableBtn.addEventListener('click', createTable);
