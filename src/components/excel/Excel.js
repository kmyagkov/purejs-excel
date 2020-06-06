import {$} from '@core/DOM';

export default class Excel {
  constructor(selector, options = []) {
    this.$el = $(selector);
    this.components = options.components;
  }

  getRoot() {
    const $root = $.create('div', 'app');

    this.components = this.components.map((Component) => {
      const {tagName, className} = Component.root;
      const $el = $.create(tagName, className);
      const component = new Component($el);

      $el.html(component.html());
      $root.append($el);

      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
