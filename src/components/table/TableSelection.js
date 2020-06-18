export class TableSelection {
  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this._clear();
    this.group.push($el);
    this.current = $el;
    $el.focus().addClass('selected');
  }

  selectGroup($group = []) {
    this._clear();
    this.group = $group;
    this.group.forEach(($el) => $el.addClass('selected'));
  }

  _clear() {
    this.group.forEach(($el) => $el.removeClass('selected'));
    this.group = [];
  }
}
