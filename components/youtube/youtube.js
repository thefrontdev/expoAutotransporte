import { LitElement, html, css } from '/assets/js/lit-core.min.js';

class Youtube extends LitElement {
  static properties = {
    response: { type: Object },
    errorMessage: { type: String },
    defaultResponse: { type: Object },
  };

  constructor() {
    super();
    this.response = {};
    this.errorMessage = '';
  }

  canGetVideos() {
    const currentDate = new Date().toISOString().split('T')[0];
    const fetchRecord = JSON.parse(localStorage.getItem('fetchRecord')) || { date: currentDate, count: 0 };

    if (fetchRecord.date !== currentDate) {
      fetchRecord.date = currentDate;
      fetchRecord.count = 0;
    }

    if (fetchRecord.count < 25) {
      fetchRecord.count++;
      localStorage.setItem('fetchRecord', JSON.stringify(fetchRecord));
      return true;
    }

    return false;
  }

  async getVideos() {
    if (!this.canGetVideos()) {
      this.errorMessage = 'No se pueden hacer más peticiones a la API de Youtube';
      console.error(this.errorMessage);
      this.response = JSON.parse(localStorage.getItem('videos'));
      return;
    }
    try {
      const response = await fetch('https://content-youtube.googleapis.com/youtube/v3/search?channelType=any&channelId=UCJ-XxFcl0ltyagnJOOaQgSw&part=snippet&maxResults=3&type=video&order=date&key=AIzaSyBi9gih_Cfxww30ZP5uLRzTA1UytN-b0zc');
      if (!response.ok) {
        console.error('No se pudo obtener los videos');
        throw new Error('No se pudo obtener los videos');
      }
      localStorage.setItem('videos', JSON.stringify(await response.json()));
      this.response = await response.json();
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = error.message;
      console.error(this.errorMessage);
      this.response = JSON.parse(localStorage.getItem('videos'));
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.getVideos();  
  }

  static styles = css`
    .list {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      gap: 2rem;
      justify-content: space-evenly;
      align-items: stretch;
      flex-wrap: wrap;
      & a {
        background: #fafafa;
        backdrop-filter: blur(0.25rem);
        width: 18rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-decoration: none;
        color: #0e0e0e;
        box-shadow: 0 0 0.5rem #0e0e0e40;
        border-radius: 0.5rem;
        overflow: hidden;
        & img {
          width: 100%;
          height: auto;
          filter: grayscale(100%);
          transition: filter 0.25s linear;
        }
        & p {
          padding: 0 1rem;
        }
        &:hover {
          box-shadow: 0 0 0.5rem 0.125rem #0e0e0e80;
          & img {
            filter: grayscale(0%);
          }
        }
      }
    }
    @media (width < 500px) {
      .list {
        & a {
          width: 100%;
        }
      }
    }
  `;

  render() {
    return html`
      <div class="list">
        ${this.response.items?.map(item => html`
          <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank" rel="noopener noreferrer">
            <img src="${item.snippet.thumbnails.medium.url}" alt="Youtube Video">
            <p>${item.snippet.title}</p>
          </a>
        `)}
      </div>
    `;
  }
}

customElements.define('youtube-list', Youtube);