import {range} from '@core/utils';

export const shouldResize = (event) => event.target.dataset.resize;

export const isCell = (event) => event.target.dataset.type === 'cell';

export const parseId = (id, separator) => {
  const parsed = id.split(separator);
  return {
    row: +parsed[0],
    col: +parsed[1],
  };
};

export const matrix = ($target, $current) => {
  const target = parseId($target.dataset.id, '-');
  const current = parseId($current.dataset.id, '-');
  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);
  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}-${col}`));
    return acc;
  }, []);
};

export const nextCellSelector = (key, {col, row}) => {
  const MIN_VALUE = 1;

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++;
      break;
    case 'Tab':
    case 'ArrowRight':
      col++;
      break;
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;
      break;
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
  }

  return `[data-id="${row}-${col}"]`;
};
