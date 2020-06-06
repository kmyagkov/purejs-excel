import {capitalize} from './utils';

export default class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided to DOM listener');
    }

    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const cb = this._getCallbackName(listener);

      if (!this[cb]) {
        throw new Error(`Method ${cb} is not implemented`);
      }

      this[cb] = this[cb].bind(this);
      this.$root.on(listener, this[cb]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const cb = this._getCallbackName(listener);

      if (!cb) {
        throw new Error(`Method ${cb} is not implemented`);
      }

      this.$root.off(listener, this[cb]);
    });
  }

  _getCallbackName(eventType) {
    return `on${capitalize(eventType)}`;
  }
}
