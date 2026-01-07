import { LitElement, html, css } from "/assets/js/lit-core.min.js";

class ValueSection extends LitElement {

  static styles = css`
    section {
    position: relative;
    padding: 5rem 7.5rem;
  }

  section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    box-sizing: border-box;
    & .image {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem 1rem 0;
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
      & h2::before {
        content: '';
        position: absolute;
        right: 0;
        z-index: -1;
        display: block;
        width: 8%;
        height: 2px;
        background: linear-gradient(90deg, var(--neon), var(--border80), #05070c);
        margin-top: 1rem;
        box-shadow: -10px 0 20px var(--neon);
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

  `;
  render() {
    return html`
      <section>
        <div class="image">
          <img src="/assets/images/expo.jpeg" alt="expo autotransporte toluca hub 360">
        </div>
        <div class="text">
          <h2>De una expo comercial a un ecosistema de negocio 360°</h2>
          <p>
            <strong>Hub 360</strong> representa la evolución del evento: un modelo que conecta a todos los actores del autotransporte bajo una visión de largo plazo.<br>
            Aquí no solo se muestran productos.<br>Se <strong>generan relaciones, decisiones y oportunidades.</strong><br>
          </p>
          <p class="subtitle">
            ¿Qué nos diferencia?
          </p>
          <ul>
            <li>Integración real de marcas, proveedores, instituciones y decisores.</li>
            <li>Curaduría estratégica de participantes.</li>
            <li>Enfoque en negocio, innovación y visión de industria.</li>
            <li>Conexión directa con tomadores de decisión.</li>
          </ul>
          <p>
            Participar en Hub 360 es <strong>posicionar tu marca dentro del sistema que mueve la industria.</strong>
          </p>
        </div>
      </section>
    `;
  }
}
customElements.define('value-section', ValueSection);