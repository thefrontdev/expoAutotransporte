import { LitElement, html, css } from '../../assets/js/lit-core.min.js';

class CountdownTimer extends LitElement {
  static properties = {
    targetDate: { type: String },
    days: { type: Number },
    hours: { type: Number },
    minutes: { type: Number },
    seconds: { type: Number }
  };

  static styles = css`
    .countdown {
      display: flex;
      gap: 10px;
      & .countdown-item {
        text-align: center;
        padding: 1rem;
        background: #0e0e0e4d;
        color: #fafafa;
        width: 9rem;
        box-sizing: border-box;
        backdrop-filter: blur(0.25rem);
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem #00c60033;
        & div:first-child {
          font-size: 3rem;
          font-weight: bold;
        }
        & div:last-child {
          font-size: 1.125rem;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .countdown {
        gap: 0.5rem;
        & .countdown-item {
          & div:first-child {
            font-size: 1.75rem;
          }
          & div:last-child {
            font-size: 0.75rem;
            font-weight: bold;
            text-transform: uppercase;
          }
        }
      }
    }
  `;

  constructor() {
    super();
    this.targetDate = '';
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.calculateTime();
    this.interval = setInterval(() => this.calculateTime(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.interval);
  }

  calculateTime() {
    const target = new Date(this.targetDate).getTime();
    const now = new Date().getTime();
    const distance = target - now;

    if (distance < 0) {
      clearInterval(this.interval);
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    } else {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }

  render() {
    return html`
      <div class="countdown">
        <div class="countdown-item">
          <div>${this.days}</div>
          <div>Días</div>
        </div>
        <div class="countdown-item">
          <div>${this.hours}</div>
          <div>Horas</div>
        </div>
        <div class="countdown-item">
          <div>${this.minutes}</div>
          <div>Minutos</div>
        </div>
        <div class="countdown-item">
          <div>${this.seconds}</div>
          <div>Segundos</div>
        </div>
      </div>
    `;
  }
}

customElements.define('countdown-timer', CountdownTimer);