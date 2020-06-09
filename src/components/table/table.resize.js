import {$} from '@core/DOM';

export const resizeHandler = ($root, event) => {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const resizeType = $resizer.dataset.resize;
  const coords = $parent.getCoords();
  const cellsToResize = $root
      .findAll(`[data-col="${$parent.dataset.col}"]`);

  let resizeBarProp = 'height';
  let resizedValue = 0;

  let coordsProp = 'width';
  let coordsPos = 'right';
  let resizeProp = 'left';

  $resizer.addClass('resize--highlight');

  if (resizeType === 'row') {
    resizeBarProp = 'width';
  }

  $resizer.css({
    [resizeBarProp]: $root.getCoords()[resizeBarProp] + 'px',
  });

  document.onmousemove = (evt) => {
    let mousePos = evt.pageX;

    if (resizeType === 'row') {
      coordsProp = 'height';
      coordsPos = 'bottom';
      resizeProp = 'top';
      mousePos = evt.pageY;
    }

    const delta = mousePos - coords[coordsPos];

    if (resizeType === 'col' && (coords[coordsProp] + delta < 80)) {
      resizedValue = 80;
    } else if (resizeType === 'row' && coords[coordsProp] + delta < 34) {
      resizedValue = 34;
    } else {
      resizedValue = coords[coordsProp] + delta;
    }

    $resizer.css({
      [resizeProp]: resizedValue - $resizer.getCoords()[coordsProp] + 'px',
    });
  };

  document.onmouseup = () => {
    const cssProp = resizeType === 'col' ? 'flexBasis' : 'height';

    document.onmousemove = null;
    $resizer.removeClass('resize--highlight');

    $resizer.css({
      [resizeBarProp]: 'auto',
      [coordsPos]: 0,
    });

    if (resizedValue) {
      $parent.css({
        [cssProp]: resizedValue + 'px',
      });
      cellsToResize.forEach((cell) => {
        $(cell).css({
          [cssProp]: resizedValue + 'px',
        });
      });
    }
  };
};
