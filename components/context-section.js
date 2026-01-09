import { LitElement, html, css } from "/assets/js/lit-core.min.js";

class ContextSection extends LitElement {

  static styles = css`
    section {
      position: relative;
      padding: 5rem 7.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      box-sizing: border-box;
      & .text {
        & h2::before {
          content: '';
          position: absolute;
          left: 0;
          z-index: -1;
          display: block;
          width: 8%;
          height: 2px;
          background: linear-gradient(90deg, #05070c, var(--border80), var(--neon));
          margin-top: 1rem;
          box-shadow: 10px 0 20px var(--neon);
        }
      }
      & .image {
        width: 100%;
        box-sizing: border-box;
        padding: 1rem 0 1rem 1rem;
        & img {
          width: 100%;
          border-radius: var(--radius);
          border: 2px solid var(--border);
          box-shadow:
            0 0 30px var(--border80),
            0 0 80px var(--border20);
        }
      }
    }

    section::after {
      content: '';
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, transparent, rgba(0,240,255,.04), transparent);
      pointer-events: none;
    }
    
    @media (max-width <= 480px) {
      section {
        padding: 2rem 2.5rem;
        flex-flow: column;
        & .image {
          order: 1;
        }
      }
    }

  `;

  render() {
    return html`
      <section>
        <div class="text">
          <h2>El sector autotransporte enfrenta un punto de inflexión</h2>
          <p>
            La industria del autotransporte vive una transformación acelerada: nuevas regulaciones, presión por eficiencia operativa, adopción tecnológica, profesionalización del talento y una demanda creciente de soluciones integrales.<br>
            Hoy, competir ya no es suficiente.<br><strong>Las marcas que lideran son las que se integran a ecosistemas estratégicos.</strong><br>
            Expo Autotransporte Toluca – Hub 360 nace como respuesta a este contexto: un espacio donde el mercado se entiende, se conecta y se activa en oportunidades reales de negocio, visibilidad e influencia sectorial.
          </p>
        </div>
        <div class="image">
          <img src="/assets/images/postervideo.avif" alt="camion neon">
        </div>
      </section>
    `;
  }
}

customElements.define('context-section', ContextSection);