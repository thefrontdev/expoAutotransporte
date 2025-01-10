import { LitElement, html, css } from '/assets/js/lit-core.min.js';

class FooterComponent extends LitElement {
  static styles = css`
    @font-face {
      font-family: 'Roboto';
      src: url('/assets/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
      font-weight: 400;
    }
    :host {
      display: block;
      background-color: #0064d5;
      color: white;
      text-align: center;
    }
    .footer-content {
      --facebook: #3b5998;
      --instagram: #DD2A7B;
      --tiktok: #2AF0EA;
      --youtube: #ff0000;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding-bottom: 2rem;
      box-sizing: border-box;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      font-family: 'Roboto', sans-serif;
      & a img {
        width: 100%;
      }
      & .footer-contact, & .footer-social-media {
        & a {
          color: #fafafa;
          text-decoration: none;
          & svg {
            fill: #fafafa;
            vertical-align: middle;
            transition: fill 0.25s;
          }
        }
      }
      & .footer-contact {
        & ul {
          padding: 0;
          list-style: none;
          & li {
            margin: 0.5rem 0;
          }
        }
        & a:hover {
          & svg {
            fill: #25d366;
          }
        }
      }
      & .footer-social-media {
        & div {
          display: flex;
          gap: 1rem;
        }
        & a:hover {
          & #tiktok {
            fill: var(--tiktok);
          }
          & #facebook {
            fill: var(--facebook);
          }
          & #instagram {
            fill: var(--instagram);
          }
          & #youtube {
            fill: var(--youtube);
          }
        }
      }
    }

    @media (500px < width < 1024px) {
      .footer-content {
        padding: 0 2rem 2rem;
        & a {
          width: 50%;
        }
        & .footer-social-media {
          width: 100%;
          & div {
            justify-content: space-around;
          }
        }
      }
    }

    @media (min-width: 600px) {
      .footer-content {
        flex-direction: row;
        justify-content: space-between;
        & a {
          & img {
            width: 100%;
          }
        }
      }
    }
  `;

  render() {
    return html`
      <div class="footer-content">
        <a href="/"><img src="/assets/images/logo_about.webp" alt="Expo Autotransporte"></a>
        <div class="footer-contact">
          <p>Contáctanos</p>
          <ul>
            <li>
              <a href="https://wa.link/lwv06g">
                +52 (722) 553 6388
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50">
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://wa.link/qpod6p">
                +52 (722) 554 0161
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50">
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://wa.link/3mig3o">
                +52 (55) 3276 6894
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50">
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:toluca2025@expoautotransporte.com">toluca2025@expoautotransporte.com</a>
            </li>
          </ul>
        </div>
        <div class="footer-social-media">
          <p>Síguenos</p>
          <div>
            <a href="https://www.tiktok.com/@expoautotransportetoluca" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="48px" height="48px" id="tiktok">
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/Expo-Autotransporte-2025-100104235740384" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="48px" height="48px" id="facebook">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/expoautotransporte2025/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="48px" height="48px" id="instagram">
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCrZ7Bm1fQ1JWzVh2Q9q8r5A" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="48px" height="48px" id="youtube">
                <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 15 8 L 17.400391 8 L 19 12 L 20.599609 8 L 23 8 L 20 15 L 20 19 L 18 19 L 18 14.990234 C 17.4 13.380234 15.41 9.01 15 8 z M 25 11 C 25.89 11 26.770078 11.269219 27.330078 11.949219 C 27.760078 12.439219 28 13.229531 28 14.269531 L 28 15.730469 C 28 16.770469 27.800859 17.490469 27.380859 17.980469 C 26.820859 18.650469 25.89 19 25 19 C 24.11 19 23.200625 18.650469 22.640625 17.980469 C 22.210625 17.490469 22 16.770469 22 15.730469 L 22 14.279297 C 22 13.239297 22.229922 12.439219 22.669922 11.949219 C 23.229922 11.269219 23.99 11 25 11 z M 29 11 L 31 11 L 31 17 C 31.05 17.27 31.339375 17.390625 31.609375 17.390625 C 32.019375 17.390625 32.54 16.910859 33 16.380859 L 33 11 L 35 11 L 35 19 L 33 19 L 33 17.619141 C 32.19 18.409141 31.499844 19.000703 30.589844 18.970703 C 29.929844 18.950703 29.470234 18.710469 29.240234 18.230469 C 29.100234 17.950469 29 17.499844 29 16.839844 L 29 11 z M 25 12.619141 C 24.8625 12.619141 24.730859 12.649297 24.611328 12.701172 C 24.491797 12.753047 24.383594 12.827422 24.292969 12.919922 C 24.202344 13.012422 24.128906 13.122266 24.078125 13.244141 C 24.027344 13.366016 24 13.500625 24 13.640625 L 24 16.449219 C 24 16.729219 24.111719 16.984922 24.292969 17.169922 C 24.383594 17.262422 24.491797 17.336797 24.611328 17.388672 C 24.730859 17.440547 24.8625 17.470703 25 17.470703 C 25.1375 17.470703 25.269141 17.440547 25.388672 17.388672 C 25.747266 17.233047 26 16.869219 26 16.449219 L 26 13.640625 C 26 13.080625 25.55 12.619141 25 12.619141 z M 24.990234 22 L 25.009766 22 C 25.009766 22 31.719219 22.000312 36.199219 22.320312 C 36.829219 22.390313 38.190156 22.400391 39.410156 23.650391 C 40.370156 24.590391 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 41 28.280547 41 30.810547 L 41 33.179688 C 41 35.709688 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 40.370156 39.399844 39.410156 40.339844 C 38.190156 41.589844 36.829219 41.599922 36.199219 41.669922 C 31.719219 41.989922 25 42 25 42 C 25 42 16.679141 41.919688 14.119141 41.679688 C 13.409141 41.549687 11.809844 41.589609 10.589844 40.349609 C 9.6298437 39.399609 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9 35.709688 9 33.179688 L 9 30.810547 C 9 28.280547 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9.6298438 24.590391 10.589844 23.650391 C 11.809844 22.400391 13.170781 22.390312 13.800781 22.320312 C 18.280781 22.000312 24.990234 22 24.990234 22 z M 12 26 L 12 27.978516 L 14 27.978516 L 14 38 L 16 38 L 16 27.978516 L 18 27.978516 L 18 26 L 12 26 z M 25 26 L 25 38 L 27 38 L 27 36.75 C 27.631 37.531 28.453 38 29.125 38 C 29.877 38 30.533156 37.595313 30.785156 36.820312 C 30.904156 36.401313 30.992 36.01 31 35.125 L 31 32.375 C 31 31.387 30.866234 30.642656 30.740234 30.222656 C 30.488234 29.441656 29.878 29.005 29.125 29 C 28.145 28.993 27.75 29.5 27 30.375 L 27 26 L 25 26 z M 18 29 L 18 35.685547 C 18 36.407547 18.100469 36.891984 18.230469 37.208984 C 18.450469 37.722984 18.899062 38 19.539062 38 C 20.269062 38 21.21 37.485766 22 36.634766 L 22 38 L 24 38 L 24 29 L 22 29 L 22 35.269531 C 21.56 35.853531 20.919531 36.289062 20.519531 36.289062 C 20.259531 36.289062 20.05 36.179578 20 35.892578 L 20 29 L 18 29 z M 35.029297 29 C 34.021297 29 33.234063 29.317016 32.664062 29.916016 C 32.244062 30.358016 32 31.080578 32 32.017578 L 32 35.083984 C 32 36.014984 32.2685 36.666516 32.6875 37.103516 C 33.2585 37.702516 34.044172 38 35.076172 38 C 36.107172 38 36.918844 37.686781 37.464844 37.050781 C 37.704844 36.769781 37.858781 36.453563 37.925781 36.101562 C 37.943781 35.942563 38 35.511 38 35 L 36 35 L 36 35.798828 C 36 36.262828 35.552 36.638672 35 36.638672 C 34.448 36.638672 34 36.261828 34 35.798828 L 34 34 L 38 34 L 38 33.423828 L 38 31.978516 C 38 31.043516 37.770422 30.359016 37.357422 29.916016 C 36.804422 29.317016 36.019297 29 35.029297 29 z M 35 30.447266 C 35.552 30.447266 36 30.824109 36 31.287109 L 36 32.615234 L 34 32.615234 L 34 31.287109 C 34 30.823109 34.448 30.447266 35 30.447266 z M 28.220703 30.746094 C 28.765703 30.746094 29 31.081 29 32.125 L 29 34.875 C 29 35.919 28.765703 36.279297 28.220703 36.279297 C 27.909703 36.279297 27.316 36.066 27 35.75 L 27 31.375 C 27.316 31.063 27.909703 30.746094 28.220703 30.746094 z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>© 2025 Expo Autotransporte. Todos los derechos reservados.</div>
        <div>
          <a href="/privacidad" style="color: white; text-decoration: none;">Politica de Privacidad</a>
        </div>
      </div>
    `;
  }
}

customElements.define('expo-footer', FooterComponent);