const CODES = {
  A: 65,
  Z: 90,
};

const createCol = (col) => {
  return `<div class="app-table__cell app-table__cell--header">${col}</div>`;
};

const createCell = () => {
  return (`
    <div
      class="app-table__cell"
      contenteditable
      spellcheck="false"
    ></div>
  `);
};

const toChar = (_, i) => {
  return String.fromCharCode(CODES.A + i);
};

const createRow = (content, i) => {
  return (`
    <div class="app-table__row">
      <div class="app-table__cell">${i ? i : ''}</div>
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
