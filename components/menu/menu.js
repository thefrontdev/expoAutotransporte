import { LitElement, html, css } from '/assets/js/lit-core.min.js';

class Menu extends LitElement {
  static styles = css`
    .menu-icon {
      display: none;
      cursor: pointer;
    }

    nav {
      --bg-color: #fafafa;
      width: 100vw;
      background-color: var(--bg-color);
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0 0.25rem 0.5rem #0e0e0e40;
      transition: all 0.25s;
      position: fixed;
      z-index: 2;
      &.scroll {
        --bg-color: #00c60080;
        backdrop-filter: blur(0.25rem);
        & .nav-container #nav-items a:not(#logo) {
          color: #fafafa;
        }
        & .nav-container {
          & .hamburger-menu {
            & span {
              background-color: #fafafa;
              &::after, &::before {
                background-color: #fafafa;
              }
            }
          }
        }
      }
      & .nav-container {
        max-width: 1200px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2rem;
        position: relative;
        
        & .hamburger-menu {
          width: 2.5rem;
          height: 2.5rem;
          position: absolute;
          top: 0;
          right: 0;
          & span {
            width: 80%;
            height: 2px;
            display: block;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);    
            background-color: #00c600;
            z-index: 0;
            transition: all 0.6s ease;
            &::after, &::before {
              content: "";
              position: absolute;
              display: block;
              width: 100%;
              height: 2px;
              background-color: #00c600;
              transition: all 0.6s ease;
            }
            &::after {
              top: -10px;
            }
            &::before {
              bottom: -10px;
            }
          }
        }
        
        & input {
          width: 2.5rem;
          height: 2.5rem;
          margin: 0;
          position: absolute;
          z-index: 1;
          right: 0;
          top: 0;
          opacity: 0;
          &:hover {
            cursor: pointer;
          }
          &:checked {
            & ~ #nav-items {
              transform: translateY(0%);
              height: auto;
              opacity: 1;
            }
            & ~ .hamburger-menu span {
              background: transparent;
              &::before {
                transform: rotate(45deg) translate(-5px, -9px);
              }
              &::after {
                transform: rotate(-45deg) translate(-5px, 9px);
              }
            }
          }
        }

        & #nav-items {
          transform: translateY(-100%);
          transition: all 0.6s ease;
          position: relative;
          display: none;
          transition: all 0.25s linear;
          & a {
            width: 100%;
            text-align: center;
            display: block;
            color: #0064d5;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            transition: all 0.5s;
            &:hover {
              font-weight: bold;
            }
          }
        }
        &:has(input:checked) {
          & ~ #nav-items-mobile{
            & a {
              display: block !important;
            }
          }
        }
        &.scroll:has(input:checked) {
          & ~ #nav-items-mobile{
            & a {
              color: #fafafa
            }
          }
        }
      }
      #nav-items-mobile {
        & a {
          width: 100%;
          text-align: center;
          color: #0064d5;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          transition: all 0.5s allow-discrete;
          display:none;
          &:hover {
            font-weight: bold;
          }
        }
      }
    }
    @media screen and (min-width: 500px) {
      .nav {
        width: 100%;
      }
      .nav-container {
        margin: 0 auto !important;
        & #nav-items {
          display: flex !important;
          position: absolute;
          top: 0;
          right: 0px;
          height: auto !important;
          opacity: 1 !important;
          transform: translateY(0%) !important;
          & a {
            display: inline-block;
            width: auto;
          }
        }
        & .hamburger-menu {
          display: none;
        }
        
        & input {
          display: none;
        }
      }
      #nav-items-mobile {
        display: none;
      }
    }
  `;

  constructor() {
    super();
    this.menuVisible = (innerWidth < 480) ? false : true;
    this.scroll = false;
    this.linkActive = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.menuVisible = (innerWidth < 480) ? false : true;

    window.addEventListener('resize', () => {
      this.menuVisible = (innerWidth < 480) ? false : true;
      this.requestUpdate();
    });

    window.addEventListener('scroll', () => {
      this.scroll = window.scrollY > 50;
      this.requestUpdate();
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.requestUpdate();
  }

  render() {
    return html`
    <nav role="navigation" class="${this.scroll ? 'scroll' : ''}">
      <div class="nav-container">
        <a href="#inicio" id="logo">
          <img src="/assets/images/logo_2026.svg" alt="Logo" height="40" width="136">
        </a>
        <input type="checkbox">
        <div class="hamburger-menu">
          <span></span>
        </div>
        <div id="nav-items" role="navigation">
          <a href="#inicio">Inicio</a>
          <a href="#expositores">Expositor</a>
          <a href="#visitantes">Visitante</a>
          <a href="#prensa">Prensa</a>
        </div>
      </div>
      <div id="nav-items-mobile" role="navigation">
        <a href="#inicio">Inicio</a>
        <a href="#expositores">Expositor</a>
        <a href="#visitantes">Visitante</a>
        <a href="#prensa">Prensa</a>
      </div>
    </nav>
    `;
  }
}

customElements.define('expo-menu', Menu);