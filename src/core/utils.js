export const capitalize = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const range = (start, end) => {
  if (end < start) {
    [start, end] = [end, start];
  }

  return new Array(end - start + 1)
      .fill('')
      .map((_, i) => start + i);
};
