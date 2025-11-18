import { LitElement, html, css } from '/assets/js/lit-core.min.js';

class ImageCarousel extends LitElement {
  static properties = {
    type: { type: String },
    images: { type: Array },
    sponsors: { type: Array },
    partners: { type: Array },
  };

  static styles = css`
    .carousel {
      width: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
      margin-bottom: 2rem;
      & .carousel-wrapper {
        width: 100%;
        min-width: fit-content;
        height: 6rem;
        display: flex;
        align-items: center;
        gap: 4rem;
        animation: slide 60s linear infinite;
        &.sponsors {
          height: 8rem;
          animation: slide 40s linear infinite;
          & img {
            height: 6rem;
          }
        }
        & .remove-bg {
          filter: brightness(1);
          mix-blend-mode: multiply;
        }
        & img {
          height: 4rem;
          width: auto;
          display: block;
          transition: transform 0.3s ease;
          &:hover {
            transform: scale(1.1);
          }
        }
        &:has(img:hover){
          -webkit-animation-play-state: paused;
          animation-play-state: paused;
        }
      }
    }

    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `;

  constructor() {
    super();
    this.type = '';
    this.images = [];
    this.sponsors = [
      '/assets/images/sponsors/Benral.jpg',
      '/assets/images/sponsors/CANACAR.jpg',
      '/assets/images/sponsors/Deltex.jpg',
      '/assets/images/sponsors/el-arbol.jpg',
      '/assets/images/sponsors/mi-conductor.jpg',
      '/assets/images/sponsors/mobil.jpg',
      '/assets/images/sponsors/rasa.jpg',
      '/assets/images/sponsors/tab.jpg',
    ]; 
    this.partners = [
      '/assets/images/partners/atlas-web.jpg',
      '/assets/images/partners/Camiones-rivera-web.jpg',
      '/assets/images/partners/cifremex-web.jpg',
      '/assets/images/partners/cluth-y-frenos-lagger-web.jpg',
      '/assets/images/partners/cofremex-web.jpg',
      '/assets/images/partners/corvus.jpg',
      '/assets/images/partners/disel-vega-web.jpg',
      '/assets/images/partners/dong-feng-web.jpg',
      '/assets/images/partners/gm-transport.jpg',
      '/assets/images/partners/Gohner.jpg',
      '/assets/images/partners/hangcha-web.jpg',
      '/assets/images/partners/jemkal-web.jpg',
      '/assets/images/partners/Logos-AMO.jpg',
      '/assets/images/partners/Nuno-web.jpg',
      '/assets/images/partners/precision-diesel-web.jpg',
      '/assets/images/partners/qualitas.jpg',
      '/assets/images/partners/sac-web.jpg',
      '/assets/images/partners/Segu.jpg',
      '/assets/images/partners/tersit-web.jpg',
      '/assets/images/partners/zapata-web.jpg',
    ];
    this.currentIndex = 0;
  }

  firstUpdated() {
    this.images = this.type === 'sponsors' ? this.sponsors : this.partners;
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.requestUpdate();
    }, 3000);
  }

  render() {
    return html`
      <div class="carousel">
        <div class="carousel-wrapper ${this.type}">
          ${this.images.map((image, index) => html`
              <img src="${image}" class="remove-bg">
          `)}
          ${this.images.map((image, index) => html`
              <img src="${image}" class="remove-bg">
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('image-carousel', ImageCarousel);