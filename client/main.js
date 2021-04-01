class Grid {
  constructor(columnsConfig, tableData, tableCaption = undefined) {
    // columns: [{field: .., title: ..}]
    // data = [{}, {} ...]
    this.columns = columnsConfig;
    this.data = tableData;
    this.caption = tableCaption;
  }

  sortData(byField) {
    function compare(field, order = 'asc') {
      return (a, b) => {
        if (!a.hasOwnProperty(field) || !b.hasOwnProperty(field)) {
          return 0;
        }

        const A = typeof a[field] === 'string' ? a[field].toLowerCase() : a[field];
        const B = typeof b[field] === 'string' ? b[field].toLowerCase() : b[field];

        if (order === 'asc') {
          if (A < B) return -1;
          if (A > B) return 1;
        }

        if (order === 'desc') {
          if (A > B) return -1;
          if (A < B) return 1;
        }

        return 0;
      };
    }

    this.data.sort(compare(byField));

    return this;
  }

  render(rootId) {
    const root = document.getElementById(rootId);

    let headers = '';

    for (const column of this.columns) {
      headers += `<th id=${column.field}>${column.title ? column.title : column.field}</th>`;
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

    const bindedSortData = this.sortData.bind(this);

    root.addEventListener('click', function sortListener(ev) {
      if (ev.target.tagName !== 'TH') return;
      root.removeEventListener('click', sortListener);
      bindedSortData(ev.target.id).render(rootId);
    });
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
  new Grid(columns, data, 'Table Caption').render('root');
}

createTableBtn.addEventListener('click', createTable);
