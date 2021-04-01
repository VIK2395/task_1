export default class Grid {
  constructor(columnsConfig, tableData, tableCaption = undefined) {
    this.columns = columnsConfig;
    this.data = tableData;
    this.caption = tableCaption;
    this.sort = {
      field: null,
      order: null,
    };
    this.compare = this.compare.bind(this);
  }

  compare(field) {
    if (this.sort.field === field) {
      if (this.sort.order === 'asc') {
        this.sort.order = 'desc';
      } else {
        this.sort.order = 'asc';
      }
    } else {
      this.sort.field = field;
      this.sort.order = 'asc';
    }

    return (a, b) => {
      if (!a.hasOwnProperty(field) || !b.hasOwnProperty(field)) {
        return 0;
      }

      const A = typeof a[field] === 'string' ? a[field].toLowerCase() : a[field];
      const B = typeof b[field] === 'string' ? b[field].toLowerCase() : b[field];

      if (this.sort.order === 'asc') {
        if (A < B) return -1;
        if (A > B) return 1;
      }

      if (this.sort.order === 'desc') {
        if (A > B) return -1;
        if (A < B) return 1;
      }

      return 0;
    };
  }

  sortData(byField) {
    this.data.sort(this.compare(byField));
    return this;
  }

  render(rootId) {
    const root = document.getElementById(rootId);

    let headers = '';

    const defaultCaret = `<div class="tooltip">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="12" height="12"
          fill="currentColor"
          class="bi bi-chevron-expand"
          viewBox="0 0 16 16"
        >
          <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
        </svg>
        <span class="tooltiptext">Sort column ascending</span>
      </div>`;

    const caretUp = `<div class="tooltip">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-caret-up-fill"
          viewBox="0 0 16 16"
        >
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
        </svg>
        <span class="tooltiptext">Sort column descending</span>
      </div>`;

    const caretDown = `<div class="tooltip">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
        <span class="tooltiptext">Sort column ascending</span>
      </div>`;

    for (const column of this.columns) {
      let caret = defaultCaret;

      if (this.sort.field === column.field) {
        if (this.sort.order === 'asc') {
          caret = caretUp;
        } else {
          caret = caretDown;
        }
      }

      headers += `<th id=${column.field}>
          <div>
            <div>${column.title ? column.title : column.field}</div>
            <div class="caret">${caret}</div>
          </div>
        </th>`;
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

    const table = `<div class="table-wrapper"><table>
            ${caption}
            <thead>
              ${tableHeaderRow}
            </thead>
            <tbody>
              ${tableBodyRows}
            </tbody>
          </table></div>`;

    root.innerHTML = table;

    const bindedSortData = this.sortData.bind(this);

    root.addEventListener('click', function sortListener(ev) {
      if (ev.target.closest('th')) {
        root.removeEventListener('click', sortListener);
        bindedSortData(ev.target.closest('th').id).render(rootId);
      }
    });
  }
}
