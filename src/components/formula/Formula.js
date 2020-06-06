import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static root = {
    tagName: 'aside',
    className: 'app-formula app__formula',
  }

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
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
    console.log('Formula:oninput', event);
  }
}
