import { css, html, LitElement } from './../assets/js/lit-core.min.js';

import '/components/menu/menu.js';
import '/components/footer/footer.js';
import '/pages/home.js';
import '/pages/exhibitors.js';
import '/pages/visitors.js';
import '/pages/press.js';
import '/pages/visitors-registry.js';
import '/pages/register-attendance.js';
import '/pages/attendees.js';

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

changeView(hash) {
  const outlet = this.shadowRoot.querySelector('#router-outlet');
  console.log(outlet);
  let selectSection = '';
  const sections = {
    inicio: 'home',
    expositores: 'exhibitors', 
    visitantes: 'visitors', 
    prensa: 'press', 
    'registro-visitantes': 'visitors-registry', 
    registros: 'attendees'
  };
  if (hash.includes('?')) {
    selectSection='register-attendance';
  }
  else {
    selectSection =sections[hash.substring(1)];
  }
  const page = selectSection+'-page';
  console.log(page);
  outlet.innerHTML = `<${page}></${page}>`;
}

firstUpdated() {
  this._hash = window.location.hash || '#inicio';
  this.changeView(this._hash);
}

connectedCallback() {
  super.connectedCallback();
  console.log(window.location);
  const hash = window.location.hash || '#inicio';
  console.log(hash);
  window.addEventListener('popstate', (e) => this.changeView(e.target.location.hash));
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
