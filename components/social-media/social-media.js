import { LitElement, html, css } from '/assets/js/lit-core.min.js';

class SocialMedia extends LitElement {
  static properties = {
    name: { type: String },
    url: { type: String },
  }
  
  static styles = css`
  a {
    text-decoration: none;
    width: 15rem;
    aspect-ratio: 1;
    box-sizing: border-box;
    color: #0e0e0e;
  }
  .social-media {
    --facebook: #3b5998;
    --instagram: #DD2A7B;
    --tiktok: #0e0e0e;
    --youtube: #ff0000;
    width: 13rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    border: 0.125rem solid;
    &:hover {
      box-shadow: 0.125rem 0.25rem 0.25rem #0e0e0e80;
    }
    &.tiktok {
      border-color: var(--tiktok);
      & .title {
        background: var(--tiktok);
      }
    }
    &.facebook {
      border-color: var(--facebook);
      & .title {
        background: var(--facebook)
      }
    }
    &.instagram {
      border-color: var(--instagram);
      & .title {
        background: var(--instagram);
      }
    }
    &.youtube {
      border-color: var(--youtube);
      & .title {
        background: var(--youtube);
      }
    }
    & .title {
      text-align: center;
      font-weight: bold;
      color: #fafafa;
      margin: 0;
      padding: 0.5rem 0;
    }
    & .content {
      width: 100%;
      height: 100%;
      display: grid;
      place-content:center;
      box-sizing: border-box;
      & img {
        width: 10rem;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 500px) {
    a {
      width: 11rem;
    }
    .social-media {
      width: 11rem;
      height: max-content;
      & .title {
        padding: 0.25rem 0.5rem;
        text-wrap: wrap balance;

      }
      & .content {
        padding: 0.25rem;
        & img {
          width: 8.25rem;
        }
      }
    }
  }
  `;
  constructor() {
    super();
    this.icons = {
      tiktok: '/assets/images/tiktok.png',
      facebook: '/assets/images/facebook.png',
      instagram: '/assets/images/instagram.jpg',
      youtube: '/assets/images/youtube.png',
    }
  }

  render() {
    return html`
      <a href="${this.url}" target="_blank" rel="noopener noreferrer">
        <div class="social-media ${this.name.replace(' ', '').toLowerCase()}">
          <p class="title">Síguenos en ${this.name}</p>
          <div class="content">
            <img src="${this.icons[this.name.replace(' ', '').toLowerCase()]}" alt="${this.name} Icon" />
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define('social-media', SocialMedia);