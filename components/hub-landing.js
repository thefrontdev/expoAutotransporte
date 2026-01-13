import { LitElement, html, css } from "/assets/js/lit-core.min.js";
import { styles } from "/assets/styles/styles.js";


import "./hero-section.js";
import "./context-section.js";
import "./value-section.js";
import "./bento-benefits.js";
import "./final-cta.js";
import "./audence-reach.js";
import "./authority-ecosystem.js";
import "./participation-section.js";
import "./urgency-scarcity.js";

class HubLanding extends LitElement {
  static styles = [
    styles,
    css`
      main {
        max-width: 1440px;
        margin: auto;
      }
    `
  ];

  render() {
    return html`
      <main>
        <hero-section></hero-section>
        <context-section></context-section>
        <value-section></value-section>
        <bento-benefits></bento-benefits>
        <audence-reach></audence-reach>
        <authority-ecosystem></authority-ecosystem>
        <participation-section></participation-section>
        <urgency-scarcity></urgency-scarcity>
        <final-cta></final-c>
      </main>
    `;
  }
}

customElements.define('hub-landing', HubLanding);