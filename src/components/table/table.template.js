const CODES = {
  A: 65,
  Z: 90,
};

const createCol = (col, i) => {
  return (`
    <div
      class="app-table__cell app-table__cell--header"
      data-type="resizable"
      data-col="${i}"
    >
      ${col}
      <div class="resize resize--col" data-resize="col"></div>
    </div>
  `);
};

const createCell = (_, i) => {
  return (`
    <div
      class="app-table__cell"
      contenteditable
      spellcheck="false"
      data-col="${i}"
    ></div>
  `);
};

const toChar = (_, i) => {
  return String.fromCharCode(CODES.A + i);
};

const createRow = (content, i) => {
  const resizer = i ?
    `<div class="resize resize--row"
          data-resize="row" 
    ></div>` :
    '';

  return (`
    <div class="app-table__row" data-type="resizable" data-resize="row">
      <div class="app-table__cell">
        ${i ? i : ''}
        ${resizer}
      </div>
      ${content}
    </div>
  `);
};

export const createTable = (rowsCount = 20) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('');

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('');

    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
};
