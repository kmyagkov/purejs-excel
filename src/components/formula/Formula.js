import ExcelComponent from '@core/ExcelComponent';
import {$} from '@core/DOM';

export default class Formula extends ExcelComponent {
  static root = {
    tagName: 'aside',
    className: 'app-formula app__formula',
  }

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
    });
  }

  init() {
    super.init();
    this.$formula = this.$root.find('#formula');
    this.$on('table:select', (cell) => {
      this.$formula.textContent(cell.textContent());
    });
    this.$on('table:input', (cell) => {
      this.$formula.textContent(cell.textContent());
    });
  }

  html() {
    return (
      `<div class="app-formula__field">
        <label for="formula" class="app-formula__label">f(x)</label>
        <div class="ex-input app-formula__input"
          id="formula"
          contenteditable
          spellcheck="false"
        ></div>
      </div>`
    );
  }

  onInput(event) {
    const text = $(event.target).textContent();
    this.$emit('formula:input', text);
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];

    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit('formula:done');
    }
  }
}
