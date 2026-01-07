import { LitElement, html, css } from "/assets/js/lit-core.min.js";

export class BentoBenefits extends LitElement {
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

    .big { grid-column: span 2; }

    @media (max-width: 768px) {
      .card {
        backdrop-filter: none;
      }
    }
  `;

  render() {
    return html`
      <section>
        <h2>Beneficios diseñados para cada actor del ecosistema</h2>
        <div class="bento">
          <div class="card">
            <p class="card-title">Expositores</p> 
            <p>Conecta tu solución con quienes realmente toman decisiones.</p>
            <ul>
              <li>Generación de leads calificados.</li>
              <li>Contacto directo con compradores, gerentes y directivos.</li>
              <li>Posicionamiento frente a un público especializado.</li>
              <li>Visibilidad estratégica, no masiva.</li>
            </ul>
          </div>
          <div class="card">
            <p class="card-title">Patrocinadores</p>
            <p>Tu marca como referente de la industria.</p>
            <ul>
              <li>Presencia premium y asociación con innovación.</li>
              <li>Acceso preferencial a decisores y líderes sectoriales.</li>
              <li>Construcción de autoridad y liderazgo.</li>
              <li>Influencia en la narrativa del sector.</li>
            </ul>
          </div>
          <div class="card">
            <p class="card-title">Marcas Tractoras</p>
            <p>Lidera, articula y marca agenda.</p>
            <ul>
              <li>Posicionamiento como motor del ecosistema.</li>
              <li>Atracción de proveedores, aliados y talento.</li>
              <li>Visión estratégica de industria.</li>
              <li>Presencia institucional de alto nivel.</li>
            </ul>
          </div>
          <div class="card">
            <p class="card-title">Para Aliados Estratégicos e Instituciones</p>
            <p>Incide en el rumbo del sector.</p>
            <ul>
              <li>Representatividad y visibilidad institucional.</li>
              <li>Conexión directa con la industria productiva.</li>
              <li>Fortalecimiento del ecosistema autotransporte.</li>
            </ul>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('bento-benefits', BentoBenefits);