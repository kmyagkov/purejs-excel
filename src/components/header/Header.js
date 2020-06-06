import ExcelComponent from '@core/ExcelComponent';

export default class Header extends ExcelComponent {
  static root = {
    tagName: 'header',
    className: 'app-header app__header',
  }

  html() {
    return (
      `<div class="logo app-header__logo">
        <img src="img/logo.png" width="40" height="40" alt="Excel logo">
      </div>
      <h1 class="app-header__title">Pure JS Excel</h1>
      <div class="app-header__field">
        <input type="text" class="ex-input" placeholder="Новая таблица">
      </div>
      <div class="app-header__controls">
        <button type="button" class="ex-btn">
          <i class="material-icons">delete</i>
        </button>
        <button type="button" class="ex-btn">
          <i class="material-icons">exit_to_app</i>
        </button>
      </div>`
    );
  }
}
