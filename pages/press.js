import { LitElement, html, css } from '/assets/js/lit-core.min.js';
import { styles } from "../assets/styles/styles.js";

class PressPage extends LitElement {
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
        & .box-container {
          width: 17rem;
          height: 31rem;
          perspective: 62rem;
          background: transparent;
          & .img-box {
            width: 17rem;
            height: 100%;
            box-sizing: border-box;
            position: relative;
            transition: transform 0.5s;
            transform-style: preserve-3d;
            animation: flip 8s ease-in-out infinite;
            & img {
              width: auto;
              height: 100%;
              box-sizing: border-box;
              position: absolute;
              backface-visibility: hidden;
              &.back {
                transform: rotateY(180deg);
              }
            }
          }
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
          & a {
            text-decoration: none;
            margin: 0 auto;
            width: fit-content;
          }
        }
      }
      @keyframes flip {
        0%, 80% {
          transform: rotateX(0deg);
        }
        30%, 50% {
          transform: rotateY(180deg);
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
  ];

  render() {
    return html`
      <main class="container">
        <img src="/assets/images/prensa.png" alt="Prensa">
        <div class="content">
          <h1>¿QUIERES CUBRIR NUESTRO EVENTO?</h1>
          <p>
            Si eres parte de un medio de comunicación y deseas cubrir la expo autotransporte, te invitamos a acreditarte como prensa. Tendrás acceso exclusivo a las conferencias, presentaciones de innovaciones y lanzamientos más importantes del sector, además de oportunidades para entrevistas con líderes, expertos y empresas participantes. Prepárate para documentar de primera mano las novedades y tendencias que están transformando la industria. ¡Te esperamos!
            <br>
            Para registrarte comunícate con nosotros vía:
          </p>
          <div class="buttons">
            <a href="mailto:breyhamrodriguez@expoautotransporte.com?subject=Prensa%20en%20ExpoAutotransporte%202025&body=Quiero%20formar%20parte%20de%20la%20prensa%20para%20la%20ExpoAutotransporte%202025" class="button">CORREO ELECTRÓNICO</a>
            <a href="https://wa.link/ipgp8x" class="button">WHATSAPP</a>
          </div>
        </div>
      </main>
    `;
  }
}
customElements.define("press-page", PressPage);