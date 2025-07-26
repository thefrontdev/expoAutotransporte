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
          & p {
            line-height: 1.5;
            text-align: justify;
            text-wrap: wrap balance;
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
            Si eres parte de un medio de comunicación y deseas cubrir la expo autotransporte, te invitamos a acreditarte como prensa.
            <br>
            Tendrás acceso exclusivo a las conferencias, presentaciones de innovaciones y lanzamientos más importantes del sector, además de oportunidades para entrevistas con líderes, expertos y empresas participantes.
            <br>
            Prepárate para documentar de primera mano las novedades y tendencias que están transformando la industria. ¡Te esperamos!
            <br><br>
            Para registrarte comunícate con nosotros vía:
          </p>
          <div class="buttons">
            <a href="mailto:breyhamrodriguez@expoautotransporte.com?subject=Prensa%20en%20ExpoAutotransporte%202025&body=Quiero%20formar%20parte%20de%20la%20prensa%20para%20la%20ExpoAutotransporte%202025" class="button">CORREO ELECTRÓNICO</a>
            <a href="https://wa.link/85l72p" class="button" target="_blank" rel="noopener noreferrer">
              WHATSAPP
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50" fill="#fafafa">
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    `;
  }
}
customElements.define("press-page", PressPage);