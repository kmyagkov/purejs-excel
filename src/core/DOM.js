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

    this.$el.append(element);

    return this;
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
