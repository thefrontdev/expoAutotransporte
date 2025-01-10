import { LitElement, html, css } from '/assets/js/lit-core.min.js';

class ImageCarousel extends LitElement {
  static properties = {
    images: { type: Array }
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
        animation: slide 40s linear infinite;
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
    this.images = [
      '/assets/images/partners/axone.png',
      '/assets/images/partners/bernal.webp',
      '/assets/images/partners/biklacargo.png',
      '/assets/images/partners/calorheat.png',
      '/assets/images/partners/centradetubos.png',
      '/assets/images/partners/corvus.png',
      '/assets/images/partners/dextel.svg',
      '/assets/images/partners/dfrc.png',
      '/assets/images/partners/dieselprotection.png',
      '/assets/images/partners/dieselgroup.png',
      '/assets/images/partners/facturoporti.png',
      '/assets/images/partners/faw.png',
      '/assets/images/partners/frenelsa.jpeg',
      '/assets/images/partners/intelyvale.png',
      '/assets/images/partners/inyecdiesel.png',
      '/assets/images/partners/leon.png',
      '/assets/images/partners/md.png',
      '/assets/images/partners/movilidad3.png',
      '/assets/images/partners/mucavi.png',
      '/assets/images/partners/ous.png',
      '/assets/images/partners/rivera.png',
      '/assets/images/partners/sama.png',
      '/assets/images/partners/segu.png',
      '/assets/images/partners/sidpower.png',
      '/assets/images/partners/sinditol.png',
      '/assets/images/partners/turbo.png',
      '/assets/images/partners/zapata.png',
    ];
    this.currentIndex = 0;
  }

  firstUpdated() {
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
        <div class="carousel-wrapper">
          ${this.images.map((image, index) => html`
              <img src="${image}">
          `)}
          ${this.images.map((image, index) => html`
              <img src="${image}">
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('image-carousel', ImageCarousel);