import { LitElement, html, css } from "/assets/js/lit-core.min.js";

export class ParticipationSection extends LitElement {
    static styles = css`
      section {
        position: relative;
        padding: 5rem 7.5rem;
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

      .bento {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        height: auto;
        box-sizing: border-box;
        margin-top: 3rem;
      }

      .card,
      button {
        will-change: transform;
      }

      .card {
        width: 16.25rem;
        box-sizing: border-box;
        background: linear-gradient(180deg, rgba(14,21,43,.7), rgba(5,7,12,.9));
        border-radius: var(--radius);
        border: 1px solid rgba(0,240,255,.25);
        backdrop-filter: blur(12px);
        box-shadow:
          0 0 0 1px rgba(0,240,255,.15),
          0 10px 30px rgba(0,0,0,.4),
          inset 0 0 20px rgba(0,240,255,.05);
        padding: 28px;
        transition:
          transform .35s var(--ease),
          box-shadow .35s var(--ease),
          border-color .35s var(--ease);
      }

      .card {
        &:nth-child(odd)::before {
          content: url('/assets/images/icons/chevron-up-blue.png');
          position: absolute;
          top: 0;
          right: 0;
          filter: drop-shadow(0px 0px 8px #00f0ffcc);
          opacity: 0;
          transition: transform .35s var(--ease);
        }
        &:nth-child(even)::before {
          content: url('/assets/images/icons/chevron-up-yellow.png');
          position: absolute;
          top: 0;
          right: 0;
          filter: drop-shadow(0px 0px 8px #e0e736cc);
          opacity: 0;
          transition: transform .35s var(--ease);
        }
      }

      .card::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        opacity: 0;
        transition: .35s;
        background: linear-gradient(120deg, transparent, #000ffa33, transparent);
      }

      .card:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow:
          0 0 0 1px rgba(0,240,255,.6),
          0 0 40px rgba(0,240,255,.6),
          0 30px 60px rgba(0,0,0,.6);
        &::before {
          transform: translateY(-2.5rem);
          opacity: 1;
        }
      }

      .card:hover::after {
        opacity: 1;
      }

      .card-title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      @media (max-width: 768px) {
        .card {
          backdrop-filter: none;
        }
      }
      
      @media (max-width: 480px) {
        section {
          padding: 4rem 2.5rem;
          & .bento {
            width: 100%;
            box-sizing: border-box;
            flex-flow: column;
            gap: 1rem;

            & .card {
              width: 100%;
            }
          }
        }
      }
    `;

    render() {
      return html`
        <section>
          <h2>Elige cómo quieres posicionarte en la industria</h2>
          <div class="bento">
            <div class="card">
              <p class="card-title">Expositor</p>
              <p>Visibilidad directa frente a compradores y decisores.</p>
            </div>
            <div class="card">
              <p class="card-title">Patrocinador Estratégico</p>
              <p>Presencia premium, liderazgo y posicionamiento de marca.</p>
            </div>
            <div class="card">
              <p class="card-title">Marca Tractora</p>
              <p>Influencia, agenda y liderazgo del ecosistema.</p>
            </div>
            <div class="card">
              <p class="card-title">Aliado Institucional</p>
              <p>Representatividad, incidencia y conexión sectorial.</p>
            </div>
          </div>
          <p>
            Cada nivel está diseñado para <strong>maximizar visibilidad, impacto y retorno</strong>, alineado a tus objetivos de negocio.
          </p>
        </section>
      `;
    }
}

customElements.define('participation-section', ParticipationSection);