import View from './View.js';

import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const numPages = this._data.results;
    // Page 1, and there are other pages
    // Page 1, and there are No pages
    // last page
    // Other page
  }
}

export default new PaginationView();
