import ExcelComponent from '@core/ExcelComponent';

export default class Toolbar extends ExcelComponent {
  static root = {
    tagName: 'aside',
    className: 'app-toolbar app__toolbar',
  }

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options,
    });
  }

  html() {
    return (
      `<div class="app-toolbar__pane">
        <button type="button" class="ex-btn ex-btn--size-s">
          <i class="material-icons">format_align_left</i>
        </button>
        <button type="button" class="ex-btn ex-btn--size-s">
          <i class="material-icons">format_align_center</i>
        </button>
        <button type="button" class="ex-btn ex-btn--size-s">
          <i class="material-icons">format_align_right</i>
        </button>
        <button type="button" class="ex-btn ex-btn--size-s">
          <i class="material-icons">format_align_justify</i>
        </button>
      </div>
      <div class="app-toolbar__pane">
        <button type="button" class="ex-btn ex-btn--size-s">
          <i class="material-icons">format_bold</i>
        </button>
        <button type="button" class="ex-btn ex-btn--size-s">
          <i class="material-icons">format_italic</i>
        </button>
        <button type="button" class="ex-btn ex-btn--size-s">
          <i class="material-icons">format_underlined</i>
        </button>
      </div>`
    );
  }

  onClick() {
    console.log('Toolbar:click');
  }
}
