import { LitElement, html, css } from'/assets/js/lit-core.min.js';
import { styles } from "../assets/styles/styles.js";

class Exhibitors extends LitElement {
  static styles = 
  [
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
          & .buttons {
            text-align: center;
            & a {
              margin: 0 1rem;
            }
          }
          & a:not(.button) {
            color: #0064d5;
            text-decoration: none;
            margin: 0 auto;
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

      @media (1024px <= width<= 1440px) {
        .container {
          height: 100%;
        }
      }

      @media (500px < width < 1024px) {
        .container {
          height: 100%;
          flex-direction: column;
          padding-top: 3rem;
          & img {
            width: 100%;
            height: auto;
          }
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
              display: flex;
              flex-direction: column;
              gap: 1rem;
              align-items: center
              & a {
                margin: 0 0.75rem;
                width: fit-content;
              }
            }
          }
        }
      }
    `
  ]
  ;

  render() {
    return html`
      <main class="container">
        <img src="/assets/images/stands.jpg" alt="Expositores" />
        <div class="content">
          <h1>¿QUIERES TENER UN STAND COMERCIAL?</h1>
          <p>
            Si quieres que tu empresa sea parte de la expo de autotransporte, te invitamos a participar con un stand comercial y destacar tus productos y servicios ante líderes y profesionales del sector. Esta es una oportunidad única para conectar con clientes potenciales, fortalecer tu marca y presentar tus innovaciones en un espacio estratégico de negocios. Reserva tu lugar hoy mismo y forma parte del evento que impulsa el futuro del autotransporte. ¡No te quedes fuera!
            <br>
            Para más información y detalles sobre la contratación de espacios, contáctanos vía: 
          </p>
          <div class="buttons">
            <a href="mailto:breyhamrodriguez@expoautotransporte.com?subject=Expositor%20en%20ExpoAutotransporte%202025&body=Quiero%20formar%20parte%20de%20los%20expositores%20para%20la%20ExpoAutotransporte%202025" class="button">CORREO ELECTRÓNICO</a>
            <a href="https://wa.link/04b8l7" class="button">WHATSAPP</a>
          </div>
          <a download="/" target="_blank"><img src="/assets/images/documento-icon.svg" alt="icono de documento"> Descarga la información necesaria</a>
        </div>
      </main>
    `;
  }
}
customElements.define('exhibitors-page', Exhibitors);