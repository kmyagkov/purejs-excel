import ExcelComponent from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

import {$} from '@core/DOM';
import {TableSelection} from '@/components/table/TableSelection';
import {resizeHandler} from '@/components/table/table.resize';
import {
  isCell,
  matrix,
  nextCellSelector,
  parseId,
  shouldResize,
} from '@/components/table/table.utils';

export default class Table extends ExcelComponent {
  static root = {
    tagName: 'div',
    className: 'app-table app__table',
  }

  constructor($root, options) {
    super($root, {
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find('[data-id="1-1"]');
    this.selection.select($cell);

    this._selectEmitter($cell);

    this.$on('formula:input', (text) => {
      this.selection.current.textContent(text);
    });

    this.$on('formula:done', () => this.selection.current.focus());
  }

  html() {
    return createTable();
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);

      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map((id) => this.$root.find(`[data-id="${id}"]`));

        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
        this._selectEmitter($target);
      }
    }
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
    ];

    const {key} = event;

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();

      const id = parseId(this.selection.current.dataset.id, '-');
      const $nextCell = this.$root.find(nextCellSelector(key, id));

      this.selection.select($nextCell);
      this._selectEmitter($nextCell);
    }
  }

  onInput(event) {
    this.$emit('table:input', $(event.target));
  }

  _selectEmitter(cell) {
    this.$emit('table:select', cell);
  }
}
