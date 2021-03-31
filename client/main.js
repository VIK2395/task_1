class Grid {
  constructor(columnsConfig, tableData, tableCaption) {
    // columns: [{field: .., title: ..}]
    // data = [{}, {} ...]
    this.columns = columnsConfig;
    this.data = tableData;
    this.caption = tableCaption;
  }

  render(rootId) {
    const root = document.getElementById(rootId);

    let headers = '';

    for (const column of this.columns) {
      headers += `<th>${column.title ? column.title : column.field}</th>`;
    }

    const tableHeaderRow = `<tr>${headers}</tr>`;

    let tableBodyRows = '';

    for (const row of this.data) {
      let cells = '';
      for (const column of this.columns) {
        cells += `<td>${row[column.field]}</td>`;
      }
      const tableBodyRow = `<tr>${cells}</tr>`;
      tableBodyRows += tableBodyRow;
    }

    const caption = this.caption ? `<caption>${this.caption}</caption>` : '';

    const table = `<table>
          ${caption}
          <thead>
            ${tableHeaderRow}
          </thead>
          <tbody>
            ${tableBodyRows}
          </tbody>
        </table>`;

    root.innerHTML = table;
  }
}

const createTableBtn = document.getElementById('createTableBtn');

async function fetchData() {
  const response = await fetch('http://localhost:5000/');
  const data = await response.json();
  return data;
}

const columns = [
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
  new Grid(columns, data, 'Table Caption').render('table');
}

createTableBtn.addEventListener('click', createTable);
