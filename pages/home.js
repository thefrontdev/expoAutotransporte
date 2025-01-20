import { LitElement, html, css } from "/assets/js/lit-core.min.js";
import { styles } from "../assets/styles/styles.js";

import "/components/countdown/countdown.js";
import "/components/speaker/speaker.js";
import "/components/carrousel/carrousel.js";
import "/components/social-media/social-media.js";
import "/components/youtube/youtube.js";

class Home extends LitElement {
  static styles = [
    styles,
    css`
      section:not(#inicio) {
        padding: 4rem 0;
        box-sizing: border-box;
      }
      
      #inicio {
        background: linear-gradient(-5deg, #0064d5 15%, #00c60026 85%), url('/assets/images/main_hero.webp') no-repeat center right/contain;
        height: calc(min(45rem, 100vh) + 3rem);
        padding: 6rem 0 2rem;
      
        & hgroup {
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: 10.5rem;
          & h1 {
            position: absolute;
            order: 0;
            top: 4rem;
            left: 1rem;
            font-size: 4rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: bold;
            text-shadow: 0 0.25rem 0.25rem #0e0e0e80;
          }
          & #edition {
            position: absolute;
            top: 0;
            left: 0;
            order: 1;
            display: flex;
            font-size: 10rem;
            color: #0064d5;
            margin-bottom: 3rem;
            font-weight: 600;
            & span {
              font-size: 2.5rem;
              color: #fafafa;
              padding-top: 1.5rem;
            }
          }
          & #year {
            font-size: 7.5rem;
            color: #00c600;
            font-weight: bold;
            position: absolute;
            top: 2rem;
            right: 30%;
            order: 1;
          }
        }

        & #location {
          width: max-content;
          box-sizing: content-box;
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #fafafa;
          font-family: 'Acumin', sans-serif;
          margin: 0 0 2rem 2rem;
          transition: all 0.25s;
          & #convenciones-logo {
            display: inline-block;
            height: 1.5rem;
            width: 2.5rem;
            background: url('/assets/images/centro_convenciones_edomex.svg') no-repeat center/contain;
            transition: background 0.25s;
          }
          &:hover {
            color: #C84885;
            text-shadow: 0 0.125rem 0.125rem #0e0e0e80;
            & #convenciones-logo {
              background: url('/assets/images/centro_convenciones_color.svg') no-repeat center/contain;
            }
          }
        }

        .button {
          margin: 0 0 3rem 9rem;
        }

        p:not(#edition) {
          color: #fafafa;
          margin: 2rem 0 1rem 14.5rem;
          font-size: 1.5rem;
        }
      }
      
      #about {
        background: #0064d5;
        color: #fafafa;
        & .content {
          display: flex;
          gap: 2rem;
          align-items: center;
          & img {
            order: 0;
          }
          & p {
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            order: 1;
            line-height: 2;
            text-align: justify;
            text-wrap: wrap balance;
          }
        }
      }
      
      #speakers {
        background: linear-gradient(#0064d5, #fafafa);
        & .section-title {
          color: #fafafa;
        }
        & .speakers-content {
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          box-sizing: border-box;
        }
      }
      
      #sponsors {
        background: #fafafa;
        & .section-title {
          color: #0064d5;
        }
        & .sponsors-content, & .orgs-content {
          display: flex;
          gap: 4rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          box-sizing: border-box;
        }
        & .sponsors-content {
          margin-bottom: 4rem;
          & img {
            height: 100%;
            max-height: 5rem;
            width: auto;
          }
        }
        & .orgs-content {
          & img {
            height: 100%;
            max-height: 4.5rem;
            width: auto;
          }
        }
      }
      
      #visitors {
        background: #fafafa;
        background: url('/assets/images/visitantes.webp') no-repeat center left/48%;
        & .section-title {
          color: #0064d5;
        }
        & .container {
          display: grid;
          & .content {
            width: 50%;
            justify-self: self-end;
            display: flex;
            flex-direction: column;
            & p {
              font-family: 'Roboto', sans-serif;
              margin-bottom: 2rem;
              line-height: 1.5;
              text-align: justify;
              text-wrap: wrap balance;
            }
            & a {
              width: max-content;
              text-decoration: none;
              align-self: center;
            }
          }
        }
      }
      
      #social {
        & .section-title {
          color: #0064d5;
        }
      
        & .social-media-content {
          display: flex;
          gap: 4rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          box-sizing: border-box;
        }
      }
      
      #videos {
        background: linear-gradient(to bottom, #fafafa, #0064d5);
        box-sizing: border-box;
        & .section-title {
          color: #0064d5;
        }
        & p {
          font-family: 'Roboto', sans-serif;
          text-align: center;
          margin-bottom: 2rem;
        }
      }
      
      #map {
        background: #0064d5;
        box-sizing: border-box;
        color: #fafafa;
        font-family: 'Roboto', sans-serif;
        & .container {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
      }
      @media (1024px <= width<= 1440px) {
        #inicio {
          background: linear-gradient(-5deg, #0064d5 15%, #00c60026 85%), url('/assets/images/main_hero.webp') no-repeat center 2.5rem/cover;
          height: 100vh;
          padding: 0;
          & .container {
            padding: 8% 0px;
            height: fit-content;
          }
        }
      }
      @media (500px < width < 1024px) {
        #inicio {
          background: linear-gradient(-5deg, #0064d5 15%, #00c60026 85%), url('/assets/images/main_hero.webp') no-repeat right 2.5rem/cover;
          height: 90vh;
          padding: 0;
          box-sizing: border-box;
          & .container {
            padding: 25% 2rem 0;
            height: fit-content;
            & hgroup {
              & #edition {
                font-size: 9rem;
                & span {
                  font-size: 3rem;
                }
              }
              & #year {
                font-size: 7rem;
                top: 1.25rem;
                right: 1%;
              }
              & #main-title {
                font-size: 3.25rem;
              }
            }
            & #location {
              margin: 0 auto 2rem;
            }
            & .button {
              display: block;
              width: fit-content;
              margin: 0 auto;
            }
            & p {
              width: fit-content;
              margin: 2rem auto;
            }
          }
        }
        #about {
          padding-top: 2rem;
          & .container {
            padding: 0 2rem;
            & .content {
              flex-direction: column;
              & p {
                order: 0;
              }
              & img {
                order: 1;
              }
            }
          }
        }
        #speakers {
          & .container {
            padding: 0 2rem;
          }
        }
        #visitors {
          padding-top: 2rem;
          background: inherit;
          & .container {
            padding: 0 2rem;
            box-sizing: border-box;
            & .content {
              width: 100%;
            }
          }
        }
        #social {
          & .container {
            padding: 0 2rem;
          }
        }
        #map {
          padding: 2rem 0;
          & .container {
            padding: 0 2rem;
          }
        }
      }
      @media screen and (max-width: 500px) {
        section:not(#inicio) {
          padding: 2rem 0;
          box-sizing: border-box;
        }
        #inicio {
          background: linear-gradient(-5deg, #0064d5 15%, #00c60026 85%), url('/assets/images/main_hero.webp') no-repeat 90% 0%/cover;
          height: calc(min(45rem, 100vh) + 3rem);
          padding: 6rem 0 0;
          & hgroup {
            margin-bottom: 6rem;
            & h1 {
              top: 2.25rem;
              font-size: 1.75rem;
              margin-bottom: 0;
            }
            & #edition {
              font-size: 5rem;
              margin-bottom: 0;
              & span {
                font-size: 1.25rem;
                padding-top: 0.75rem;
              }
            }
            & #year {
              font-size: 3.5rem;
              top: 1.125rem;
              right: 2%;
              text-shadow: 0 0 0.25rem #0e0e0e80;
            }
          }

          & #location {
            margin: 0 0 2rem 0;
            max-width: 100%;
          }

          .button {
            display: block;
            width: fit-content;
            box-sizing: border-box;
            margin: 0 auto 2rem;
          }

          p:not(#edition) {
            margin: 2rem auto;
            font-size: 1.25rem;
            width: fit-content;
          }
        }

        #about {
          & .content {
            flex-direction: column;
            gap: 1.25rem;
            align-items: center;
            & img {
              order: 1;
              width: 100%;
            }
            & p {
              order: 0;
            }
          }
        }

        #speakers {
          & .speakers-content {
            justify-content: space-around;
            gap: 0.5rem;
          }
        }

        #visitors {
          background-image: none;
          & .container {
            & .content {
              width: 100%;
              & p {
                margin-bottom: 1.25rem;
              }
            }
          }
        }

        #social {
          & .social-media-content {
            gap: 2rem;
          }
        }
      }
    `
  ];

  render() {
    return html`
    <section id="inicio">
      <main class="container">
        <hgroup>
          <p id="edition">1 <span>er</span></p>
          <span id="year">2025</span>
          <h1 id="main-title">EXPO AUTOTRANSPORTE</h1>
        </hgroup>
        <a href="https://maps.app.goo.gl/mZyKYYby8h1VrvNf9" target="_blank" rel="noopener noreferrer" id="location">
          <span id="convenciones-logo"></span>
          Centro de Convenciones del Estado de México
        </a>
        <a href="/expositores" class="button primary">REGISTRA TU STAND AQUÍ</a>
        <p>FALTAN</p>
        <countdown-timer targetDate="2025/03/14 09:00:00"></countdown-timer>
      </main>
    </section>
    
    <section id="about">
      <main class="container">
        <h2 class="section-title">CONDUCIENDO AL FUTURO DEL AUTOTRANSPORTE</h2>
        <div class="content">
          <img src="/assets/images/logo_about.webp" alt="EXPO AUTOTRANSPORTE 2025">
          <p>
            La EXPO AUTOTRANSPORTE 2025 reúne a empresarios, microempresarios, proveedores, transportistas y entusiastas,  conectando a la industria para avanzar hacia un futuro más eficiente y sostenible. <br>
            Descubre las últimas innovaciones tecnológicas, participa en conferencias y paneles con expertos, y establece valiosas conexiones que impulsarán el autotransporte en México.</p>
          </div>
        </main>
    </section>
    
    <section id="speakers">
      <main class="container">
        <h2 class="section-title">CONOCE A NUESTROS CONFERENCISTAS</h2>
        <div class="speakers-content">
          <speaker-item name="Facturo por ti" position="" imageURL="/assets/images/FacturoPorti.png"></speaker-item>
          <speaker-item name="Israel" position="" imageURL="/assets/images/Israel.png"></speaker-item>
          <speaker-item name="Sergio" position="" imageURL="/assets/images/Sergio.png"></speaker-item>
        </div>
      </main>
    </section>
    
    <section id="sponsors">
      <main class="container">
        <h2 class="section-title">PATROCINADORES</h2>
        <div class="sponsors-content">
          <a href="https://www.grupotab.com.mx/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/tab_logo.webp" alt="Grupo TAB"></a>
          <a href="https://cima-aviacion.com.mx/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/cima_logo.webp" alt="CIMA Aviación"></a>
        </div>
        <h3 class="section-title">NUESTROS ALIADOS EN EL CAMINO</h3>
        <image-carousel></image-carousel>
        <h3 class="section-title">ORGANIZACIONES</h3>
        <div class="orgs-content">
          <a href="http://edomex.gob.mx/secretaria-movilidad-comunicaciones" target="_blank" rel="noopener noreferrer"><img src="/assets/images/edomex_logo.webp" alt="Estado de México"></a>
          <a href="https://centrodeconvenciones.edomex.gob.mx/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/convenciones_logo.webp" alt="Centrod de Convenciones Edomex"></a>
        </div>
      </main>
    </section>
    
    <section id="visitors">
      <main class="container">
        <div class="content">
          <h2 class="section-title">
            VISITANTES
          </h2>
          <p>
            Expo Autotransporte te brinda la oportunidad única de descubrir las últimas innovaciones que están transformando la industria, desde tecnología avanzada hasta soluciones sustentables que impulsan un futuro más eficiente y ecológico. 
            <br>
            Participa en conferencias con líderes del sector, conoce de primera mano productos y servicios de vanguardia diseñados para llevar tu negocio al siguiente nivel. 
            <br>
            Además, conecta con profesionales, proveedores y aliados estratégicos, ampliando tu red de contactos y generando oportunidades de crecimiento. <br><br>
            ¡No te pierdas el evento que define el rumbo del autotransporte!
          </p>
          <a href="/registro-visitantes" class="button">
            REGÍSTRATE AQUÍ
          </a>
        </div>
      </main>
    </section>
    
    <section id="social">
      <main class="container">
        <div class="social-media-content">
          <social-media name="TikTok" url="https://www.tiktok.com/@expoautotransportetoluca"></social-media>
          <social-media name="Facebook" url="https://www.facebook.com/expoautotransportetoluca2025"></social-media>
          <social-media name="Instagram" url="https://www.instagram.com/expoautotransportetoluca2025"></social-media>
          <social-media name="YouTube" url="https://www.youtube.com/@ExpoAutotransporteToluca2025"></social-media>
        </div>
      </main>
    </section>
    
    <section id="videos">
      <main class="container">
        <h2 class="section-title">¿QUIERES SABER MÁS?</h2>
        <p>Mira nuestros últimos vídeos, y entérate de más</p>
        <youtube-list></youtube-list>
      </main>
    </section>
    
    <section id="map">
      <div class="map-content">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15061.89051311243!2d-99.56165!3d19.305287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8aa45776b46d%3A0x145ad3066ad18107!2sCentro%20Convenciones%20Toluca!5e0!3m2!1ses-419!2smx!4v1735785545802!5m2!1ses-419!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="container">
        <h4>
          CENTRO DE CONVENCIONES EDOMÉX
        </h4>
        <p>
          Boulevard Miguel Alemán Valdes No. 175 Col. San Pedro Totoltepec. Toluca, Estado de México C.P 50226
        </p>
      </div>
    </section>
    `;
  }
}

customElements.define('home-page', Home);
