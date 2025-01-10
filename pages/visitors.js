import { LitElement, html, css } from '/assets/js/lit-core.min.js';
import { styles } from "../assets/styles/styles.js";

class Visitors extends LitElement {
  static styles = [
    styles,
    css`
    .container {
      height: calc(100vh - 14.25rem);
      min-height: 100%;
      padding: 4rem 0;
      display: flex;
      align-items: center;
      gap: 2rem;
      & img {
        width: auto;
        height: 31rem;
      }
      & .content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        & h1 {
          color: #0064d5;
          text-align: center;
        }
        & .button {
          text-align: center;
          width: max-content;
          margin: 0 auto;
        }
        & .links {
          display: flex;
          justify-content: space-around;
          & a:not(.button) {
            color: #0064d5;
            text-decoration: none;
            width: fit-content;
            & img {
              vertical-align: middle;
              width: 1rem;
              height: 1rem;
              filter: invert(24%) sepia(99%) saturate(1922%) hue-rotate(198deg) brightness(92%) contrast(107%);
            }
          }
        }
      }
    }
    @media (1024px <= width<= 1440px) {
      .container {
        height: 100%;
      }
    }
    @media screen and (max-width: 500px) {
      .container {
        height: 100%;
        flex-direction: column;
        & img {
          width: 100%;
          height: auto;
        }
        & .content {
          width: 100%;
          box-sizing: border-box;
          padding: 0 1rem;
          & .buttons {
            & a {
              margin: 0 0.75rem;
            }
          }
        }
      }
    }
    `
  ];

  render() {
    return html`
      <main class="container">
        <img src="/assets/images/visitantes.jpg" alt="Visitantes" />
        <div class="content">
          <h1>¿TE GUSTARÍA PARTICIPAR?</h1>
          <p>
            Expo Autotransporte te brinda la oportunidad única de descubrir las últimas innovaciones que están transformando la industria, desde tecnología avanzada hasta soluciones sustentables que impulsan un futuro más eficiente y ecológico. Participa en conferencias con líderes del sector, conoce de primera mano productos y servicios de vanguardia diseñados para llevar tu negocio al siguiente nivel. Además, conecta con profesionales, proveedores y aliados estratégicos, ampliando tu red de contactos y generando oportunidades de crecimiento. 
            <br>
            ¡No te pierdas el evento que define el rumbo del autotransporte! 
          </p>
          <div class="links">
            <a href="#"><img src="/assets/images/bed.webp" alt="bed icon"> Opciones de Hospedaje</a>
            <a href="#"><img src="/assets/images/time-limit.webp" alt="calendar-icon"> Programa del evento</a>
          </div>

          <a href="/registro-visitantes" class="button primary">REGISTRATE AQUÍ</a>
        </div>
      </main>
    `;
  }
}
customElements.define("visitors-page", Visitors);