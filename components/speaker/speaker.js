import { LitElement, html, css } from '/assets/js/lit-core.min.js';

class SpeakerItem extends LitElement {
  static properties = {
    name: { type: String },
    position: { type: String },
    imageUrl: { type: String }
  };

  static styles = css`
    .container {
      position: relative;
      width: 15rem;
      height: 15rem;
      overflow: hidden;
      border-radius: 0.5rem;
      box-sizing: border-box;
    }
    .image {
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
    }
    .container:hover .image {
      transform: scale(1.15);
    }
    .info {
      position: absolute;
      bottom: -100%;
      left: 0;
      width: 100%;
      background: #00c60080;
      color: white;
      text-align: center;
      opacity: 0;
      transition: all 0.3s ease;
      & p {
        margin: 0.5rem 0;
        font-family: 'Roboto', sans-serif;
        &#name {
          font-size: 1.125rem;
          font-weight: bold;
        }
        &#position {
          font-size: 0.75rem;
          font-weight: regular;
        }
      }
    }
    .container:hover .info {
      opacity: 1;
      bottom: 0;
    }

    @media screen and (max-width: 500px) {
      .container {
        width: 11rem;
        height: 11rem;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <img class="image" src="${this.imageUrl}" alt="Speaker Image" />
        <div class="info">
          <p id="name">${this.name}</p>
          <p id="position">${this.position}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('speaker-item', SpeakerItem);