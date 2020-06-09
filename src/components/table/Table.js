import ExcelComponent from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.utils';

export default class Table extends ExcelComponent {
  static root = {
    tagName: 'div',
    className: 'app-table app__table',
  }

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  html() {
    return createTable();
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
