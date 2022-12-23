import { DomListener } from './DomListener';

export class ExcelComponents extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
