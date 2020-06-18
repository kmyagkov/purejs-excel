import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }

  prepare() {}

  html() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, cb) {
    const unsub = this.emitter.subscribe(event, cb);
    this.unsubscribers.push(unsub);
  }
}
