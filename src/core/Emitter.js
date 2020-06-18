export default class Emitter {
  constructor() {
    this.listeners = {};
  }

  emit(event, payload) {
    if (!Array.isArray(this.listeners[event])) {
      return;
    }

    this.listeners[event].forEach((listener) => listener(payload));
  }

  subscribe(event, cb) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(cb);
    return () => {
      this.listeners[event] = this.listeners[event]
          .filter((listener) => listener != cb);
    };
  }
}
