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
    --tiktok: #2AF0EA;
    --youtube: #ff0000;
    background: #e1e3f9;
    width: 15rem;
    height: 15rem;
    padding: 1rem 0 0 1rem;
    aspect-ratio: 1;
    box-sizing: border-box;
    display: grid;
    place-content: center;
    position: relative;
    &:hover{
      place-content: initial;
      box-shadow: 0 0 0.5rem #0e0e0e80;
      &::after {
        opacity: 1;
      }
      &::before {
        top: -2rem;
        left: -2rem;
        opacity: 0.75;
      }
      &.tiktok {
        &::before {
          background: 
            linear-gradient(to right, var(--tiktok) 1rem, transparent 1.06rem),
            linear-gradient(to left, var(--tiktok) 1rem, transparent 1.06rem),
            linear-gradient(to top, var(--tiktok) 1rem, transparent 1.06rem),
            linear-gradient(to bottom, var(--tiktok) 1rem, transparent 1.06rem)
          ;
          
        }
        & img {
          filter: invert(65%) sepia(51%) saturate(597%) hue-rotate(129deg) brightness(111%) contrast(92%);
        }
      }
      &.facebook {
        &::before {
          background: 
            linear-gradient(to right, var(--facebook) 1rem, transparent 1.06rem),
            linear-gradient(to left, var(--facebook) 1rem, transparent 1.06rem),
            linear-gradient(to top, var(--facebook) 1rem, transparent 1.06rem),
            linear-gradient(to bottom, var(--facebook) 1rem, transparent 1.06rem)
          ;
        }
        & img {
          filter: invert(33%) sepia(18%) saturate(1811%) hue-rotate(182deg) brightness(94%) contrast(89%);
        }
      }
      &.instagram {
        &::before {
          background: 
            linear-gradient(to right, var(--instagram) 1rem, transparent 1.06rem),
            linear-gradient(to left, var(--instagram) 1rem, transparent 1.06rem),
            linear-gradient(to top, var(--instagram) 1rem, transparent 1.06rem),
            linear-gradient(to bottom, var(--instagram) 1rem, transparent 1.06rem)
          ;
        }
        & img {
          filter: invert(26%) sepia(82%) saturate(2514%) hue-rotate(315deg) brightness(89%) contrast(94%);
        }
      }
      &.youtube {
        &::before {
          background: 
            linear-gradient(to right, var(--youtube) 1rem, transparent 1.06rem),
            linear-gradient(to left, var(--youtube) 1rem, transparent 1.06rem),
            linear-gradient(to top, var(--youtube) 1rem, transparent 1.06rem),
            linear-gradient(to bottom, var(--youtube) 1rem, transparent 1.06rem)
          ;
        }
        & img {
          filter: invert(12%) sepia(91%) saturate(7464%) hue-rotate(357deg) brightness(91%) contrast(121%);
        }
      }
      & p {
        margin-top: 1.5rem;
      }
      & img {
        margin: 1.625rem 0 0 4.5rem;
      }
    }&::after {
      content: '';
      width: 8.75rem;
      height: 8.31rem;
      background: #e1e3f9;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 0;
      transition: all 0.25s;
      opacity: 0;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(to right, #00c600 1rem, transparent 1.06rem),
        linear-gradient(to left, #00c600 1rem, transparent 1.06rem),
        linear-gradient(to top, #00c600 1rem, transparent 1.06rem),
        linear-gradient(to bottom, #00c600 1rem, transparent 1.06rem)
      ;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      transition: all 0.25s;
    }
    & p {
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
      transition: all 0.25s;
    }
    & img {
      width: 10rem;
      height: auto;
      z-index: 1;
      align-self: center;
      justify-self: center;
      transition: all 0.25s;
    }
  }

  @media screen and (max-width: 500px) {
    a {
      width: 11rem;
    }
    .social-media {
      width: 11rem;
      height: 11rem;
      &:hover{
        &::before{
          top: -1.375rem;
          left: -1.375rem;
        }
        &::after {
          width: 8.25rem;
          height: 7.125rem;
        }
        & p {
          margin-top: 0;
        }
        & img {
          margin: 0.625rem 0 0 1rem;
        }
      }
      & img {
        width: 8.5rem;
      }
    }
  }
  `;
  constructor() {
    super();
    this.icons = {
      tiktok: '/assets/images/social-media/tik-tok-150.svg',
      facebook: '/assets/images/social-media/facebook-150.svg',
      instagram: '/assets/images/social-media/instagram-150.svg',
      youtube: '/assets/images/social-media/youtube-150.svg',
    }
  }

  render() {
    return html`
      <a href="${this.url}" target="_blank" rel="noopener noreferrer">
        <div class="social-media ${this.name.replace(' ', '').toLowerCase()}">
          <p>${this.name}</p>
          <img src="${this.icons[this.name.replace(' ', '').toLowerCase()]}" alt="${this.name} Icon" />
        </div>
      </a>
    `;
  }
}

customElements.define('social-media', SocialMedia);