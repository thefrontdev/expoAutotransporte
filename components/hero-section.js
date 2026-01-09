import { LitElement, html, css } from "/assets/js/lit-core.min.js";

export class HeroSection extends LitElement {
  static styles = css`
    .overlay {
      width: 100%;
      height: 100%;
      max-height: min-content;
      box-sizing: border-box;
    }
    video {
      position: relative;
      z-index: -1;
      left: 0;
      top: 0;
      width: 100%;
      height: 111vh;
      min-height: 100vh;
      object-fit: cover;
      object-position: center;
    }
    section {
      position: absolute;
      top: 0;
      left: 0;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 2.1rem 7.5rem;
      background:
        radial-gradient(circle at 30% 10%, #0b1020, transparent 60%),
        radial-gradient(circle at 80% 20%, #4b7cff22, transparent 60%),
        linear-gradient(to top, #0a0e1a 10%, transparent 70%),
        #05070c40;
    }

    h1 {
      font-size: 4rem;
      line-height: 1.05;
      letter-spacing: -0.02em;
    }

    p {
      max-width: 35rem;
      color: var(--text-muted);
    }

    a, button {
      text-decoration: none;
      &.primary:hover {
        background: transparent;
        color: var(--neon);
        backdrop-filter: blur(0.5rem);
      }
      &.secondary:hover { 
        box-shadow: 0 0 30px var(--border-similar), 0 0 80px #005bfa55;
      }
    }

    .actions {
      margin-top: 3rem;
      display: flex;
      gap: 20px;
    }

    .primary {
      background: var(--border);
      color: #fafafa;
      padding: 1.125rem 2.625rem;
      border-radius: 0.875rem;
      border: none;
      font-weight: 600;
      border: 1px solid var(--border-similar);
      box-shadow: 0 0 30px var(--border-similar), 0 0 80px #005bfa55;
    }

    .secondary {
      background: transparent;
      border: 1px solid var(--neon);
      color: var(--neon);
      padding: 1.125rem 2.625rem;
      border-radius: 0.875rem;
      box-shadow: 0 0 18px #005bfa44;
    }

    a, button {
      transition: transform .25s var(--ease), box-shadow .25s var(--ease);
    }

    a:hover, button:hover {
      transform: translateY(-2px);
    }

    a:active, button:active {
      transform: translateY(0);
    }

    @media (max-width: 480px) {
      section {
        padding: 4rem 2.5rem;
        & h1 {
          font-size: 3rem;
        }
        & #background-video {
          height: 100vh
        }
      }
    }

    @media (max-width: 1024px) {
      section {
        grid-template-columns: 1fr;
        padding: 5rem 2.5rem;
      }
    }
  `;


  render() {
    return html`
      <div class="overlay">
        <video autoplay muted loop id="background-video">
          <source src="/assets/videos/autotransporteVid.webm" type="video/webm">
        </video>
        <section>
          <div>
            <h1>Donde el autotransporte deja de exhibirse<br>y comienza a hacer negocios</h1>
            <p>Expo Autotransporte Toluca – Hub 360</p>
            <div class="actions">
              <a class="primary" href="https://wa.link/9nxgeo" target="_blank" rel="noopener noreferrer">Registrar marca</a>
              <a class="secondary" href="/assets/docs/Brochure-Ejecutivo.pdf" download target="_blank" rel="noopener noreferrer">Descargar brochure</a>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
customElements.define('hero-section', HeroSection);
