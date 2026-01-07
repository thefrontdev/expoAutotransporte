import { css, html, LitElement } from './../assets/js/lit-core.min.js';

import '/components/hub-landing.js';

class App extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <hub-landing></hub-landing>
    `;
  }
}

customElements.define('expo-app', App);
