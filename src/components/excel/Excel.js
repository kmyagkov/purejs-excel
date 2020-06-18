import {$} from '@core/DOM';
import Emitter from '@core/Emitter';

export default class Excel {
  constructor(selector, options = []) {
    this.$el = $(selector);
    this.components = options.components;
    this.emitter = new Emitter();
  }

  getRoot() {
    const $root = $.create('div', 'app');
    const $emitter = {
      emitter: this.emitter,
    };

    this.components = this.components.map((Component) => {
      const {tagName, className} = Component.root;
      const $el = $.create(tagName, className);
      const component = new Component($el, $emitter);

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

  destroy() {
    this.components.forEach((component) => component.destroy());
  }
}
