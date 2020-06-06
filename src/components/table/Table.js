import ExcelComponent from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export default class Table extends ExcelComponent {
  static root = {
    tagName: 'div',
    className: 'app-table app__table native-scroll',
  }

  html() {
    return createTable();
  }
}
