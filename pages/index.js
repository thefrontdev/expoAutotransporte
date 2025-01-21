import { css, html, LitElement } from './../assets/js/lit-core.min.js';
import {Router} from 'https://esm.run/@vaadin/router';
import '/components/menu/menu.js';
import '/components/footer/footer.js';
import '/pages/home.js';
import '/pages/exhibitors.js';
import '/pages/visitors.js';
import '/pages/press.js';
import '/pages/visitors-registry.js';
import '/pages/register-attendance.js';

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
  }

  firstUpdated() {
    const outlet = this.shadowRoot.querySelector('#router-outlet');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/expositores', component: 'exhibitors-page'},
      { path: '/visitantes', component: 'visitors-page' },
      { path: '/prensa', component: 'press-page' },
      { path: '/asistencia', component: 'register-attendance' },
      { path: '(.*)', redirect: '/' }, // Redirige cualquier ruta desconocida a la raíz
    ]);
  }

  render() {
    return html`
    <header>
      <expo-menu></expo-menu>
    </header> 
      <div id="router-outlet"></div>
    <footer>
      <expo-footer></expo-footer>
    </footer>
    `;
  }
}

customElements.define('expo-app', App);