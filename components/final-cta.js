import { LitElement, html, css } from "/assets/js/lit-core.min.js";

export class FinalCta extends LitElement {
  static styles = css`
    section {
      position: relative;
      padding: 160px 120px;
      text-align: center;
      background:
        radial-gradient(circle at center, #00f0ff22, transparent 70%),
        #05070c;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.125rem;
        background: linear-gradient(90deg,  #05070c 10%, #000ffa40, var(--neon), #000ffa40, #05070c 90%);
        box-shadow: 0 -4px 10px #00f0ff80, 0 -6px 100px #00f0ff40;
      }
    }

    h2 { font-size: 48px; }

    a {
      margin-top: 40px;
      padding: 22px 54px;
      border-radius: 16px;
      background: var(--border);
      border: 1px solid var(--border-similar)
      box-shadow:
        0 0 30px var(--border-similar),
        0 0 80px #005bfa88;
      transition: transform .25s var(--ease), box-shadow .25s var(--ease);
      border: none;
      text-decoration: none;
      color: #fafafa;
    }

    a:hover {
      transform: translateY(-2px);
      font-weight: bold;
    }

    a:active {
      transform: translateY(0);
      font-weight: bold;
    }

    @media (max-width: 480px) {
      section {
        padding: 3rem 2.5rem;
        & h2 {
          margin: 0 auto 3.5rem;
        }
      }
    }
  `;

  render() {
    return html`
      <section>
        <h2>El futuro del autotransporte se construye hoy</h2>
        <a href="https://wa.link/9nxgeo" target="_blank" rel="noopener noreferrer">
          Registrar participación
        </a>
      </section>
    `;
  }
}
customElements.define('final-cta', FinalCta);
