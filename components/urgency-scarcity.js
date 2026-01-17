import { LitElement, html, css } from "/assets/js/lit-core.min.js";

export class UrgencyScarcity extends LitElement {
  static styles = css`
    section {
      position: relative;
      padding: 5rem 7.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      box-sizing: border-box;
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
      & .image {
        width: 100%;
        box-sizing: border-box;
        & img {
          width: 100%;
          border-radius: var(--radius);
          border: 2px solid var(--border);
          box-shadow:
            0 0 30px var(--border80),
            0 0 80px var(--border20);
        }
      }
      & .text {
        width: 100%;
      }
    }

    .bento {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: stretch;
      height: auto;
      box-sizing: border-box;
    }

    .card,
    button {
      will-change: transform;
    }

    .card {
      width: 10.5rem;
      box-sizing: border-box;
      background: linear-gradient(180deg, rgba(14,21,43,.7), rgba(5,7,12,.9));
      border-radius: var(--radius);
      border: 1px solid rgba(0,240,255,.25);
      backdrop-filter: blur(12px);
      box-shadow:
        0 0 0 1px rgba(0,240,255,.15),
        0 10px 30px rgba(0,0,0,.4),
        inset 0 0 20px rgba(0,240,255,.05);
      padding: 1.25rem;
      transition:
        transform .35s var(--ease),
        box-shadow .35s var(--ease),
        border-color .35s var(--ease);
      text-align: center;
      & img {
        margin: 0 auto;
        filter: drop-shadow(0px 0px 4px #000ffacc);
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
        <div class="text">
          <h2>Participación limitada a marcas estratégicas</h2>
          <p>
            El ecosistema Hub 360 no es abierto ni masivo.<br>
            Los espacios son <strong>limitados y cuidadosamente seleccionados</strong>.<br><br>
            Quienes se registran de forma anticipada acceden a:
          </p>
          <div class="bento">
            <div class="card">
              <img src="/assets/images/icons/star.png" alt="Icono de estrella" />
              <p class="card-title">Mejores ubicaciones.</p>
            </div>
            <div class="card">
              <img src="/assets/images/icons/visibility.png" alt="Icono de visibilidad" />
              <p class="card-title">Mayor visibilidad.</p>
            </div>
            <div class="card">
              <img src="/assets/images/icons/chart.png" alt="Icono de gráfico de ventas a la alta" />
              <p class="card-title">Prioridad comercial y estratégica.</p>
            </div>
          </div>
          <p>
            <strong>Las decisiones tempranas generan ventajas reales.</strong>
          </p>
        </div>
        <div class="image">
          <img src="/assets/images/11.png" alt="urgency and scarcity">
        </div>
      </section>
    `;
  }
}

customElements.define('urgency-scarcity', UrgencyScarcity);