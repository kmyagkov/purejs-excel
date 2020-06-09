class DOM {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  html(content) {
    if (typeof content === 'string') {
      this.$el.innerHTML = content;
      return this;
    }

    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  append(element) {
    if (element instanceof DOM) {
      element = element.$el;
    }

    this.$el.appendChild(element);

    return this;
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  css(styles = {}) {
    Object.keys(styles).forEach((prop) => {
      this.$el.style[prop] = styles[prop];
    });
  }

  addClass(name = '') {
    this.$el.classList.add(name);
  }

  removeClass(name = '') {
    this.$el.classList.remove(name);
  }

  get dataset() {
    return this.$el.dataset;
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb);
  }

  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb);
  }
}

const $ = (selector) => new DOM(selector);

$.create = (tagName, className = '') => {
  if (typeof tagName !== 'string') {
    throw new Error('Tag name must be string');
  }

  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  return $(element);
};

export {$};
