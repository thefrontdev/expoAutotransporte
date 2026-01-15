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
      width: 100%;
      min-height: 100vh;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 1fr;
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
      max-width: 50rem;
      margin-top: 0;
    }

    p {
      max-width: 35rem;
      color: var(--text-muted);
      &.title {
        font-size: 1.75rem;
        font-weight: bold;
      }
      &.date {
        font-size: 1.25rem;
        font-weight: bold;
      }
      &.location {
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--border);
        & span {
          background: url('/assets/images/icons/location.png') no-repeat center/contain;
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }

    a, button {
      text-decoration: none;
      &.primary:hover {
        background: transparent;
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
      height: fit-content;
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
      border: 1px solid var(--border);
      color: var(--border-similar);
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

    @media (width <= 480px) {
      video {
        height: 100vh
      }
      section {
        width: 100%;
        box-sizing: border-box;
        padding: 4rem 2.5rem;
        grid-template-columns: 1fr;
        & h1 {
          font-size: 2.5rem;
          max-width: 100%;
        }
      }
    }

    @media (1024px >= width > 480px) {
      section {
        padding: 5rem 2.5rem;
      }
    }

    @media (1440px >= width) {
      video {
        height: 100vh;
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
          <div class="main-content">
            <h1>Donde el autotransporte deja de exhibirse y comienza a hacer negocios</h1>
            <p class="title">Expo Autotransporte Toluca – Hub 360</p>
            <p class="date">Del 4 al 6 de marzo de 2026</p>
            <p class="location">
              <a href="https://maps.app.goo.gl/mZyKYYby8h1VrvNf9" target="_blank" rel="noopener noreferrer" id="location">
              <span></span>
              Centro de Convenciones del Estado de México
              </a>
            </p>
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
