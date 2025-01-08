import { css, html, LitElement } from './../assets/js/lit-core.min.js';
import { Router } from 'https://cdn.jsdelivr.net/npm/@lit-labs/router@0.1.3/development/router.min.js';
import '../components/menu/menu.js';
import '../components/footer/footer.js';
import '../pages/home.js';
import '../pages/exhibitors.js';
import '../pages/visitors.js';
import '../pages/press.js';
import '../pages/visitors-registry.js'

import { styles } from './../assets/styles/styles.js';

class App extends LitElement {
  static styles = [
    styles,
    css`
      :host {
        display: block;
      }
    `
];

  constructor() {
    super();
    this._router = new Router(this, [
      {
        path: '/', render: () => html`<home-page></home-page>`
      },
      {
        path: '/expositores', render: () => html`<exhibitors-page></exhibitors-page>`
      },
      {
        path: '/visitantes', render: ()=> html`<visitors-page></visitors-page>`
      },
      {
        path: '/prensa', render: ()=> html`<press-page></press-page>`
      },
      {
        path: '/registro-visitantes', render: ()=> html`<visitors-registration></visitors-registration>`
      },
    ]);
  }

  render() {
    return html`
    <header>
      <expo-menu></expo-menu>
    </header> 
      ${this._router.outlet()}
    <footer>
      <expo-footer></expo-footer>
    </footer>
    `;
  }
}

customElements.define('expo-app', App);