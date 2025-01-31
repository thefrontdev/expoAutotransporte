import { LitElement, html, css } from '/assets/js/lit-core.min.js';
import { styles } from "/assets/styles/styles.js";
import { DB } from "/assets/js/db.js";

class RegisterAttendance extends LitElement {

  static styles = [
    styles,
    css`
      .container {
        height: 100%;
        min-height: calc(100vh - 14.25rem);
        padding: 4rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }
      h1 {
        color: #0064d5;
        text-align: center;
        margin-bottom: 1rem;
      }

      .button {
        width: max-content;
        margin: 1rem auto;
        display: block;
      }

      #loginDialog {
        margin: auto;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        box-shadow: 0 0.25rem 0.25rem #0e0e0e80;
        &::backdrop {
          background: #0e0e0e80;
        }
        & h2 {
          font-family: 'Acumin', sans-serif;
          text-align: center;
          color: #0064d5;
          margin-bottom: 1rem;
        }
        & form {
          display: grid;
          gap: 0.25rem;
          & label {
            font-family: 'Roboto', sans-serif;
          }
          & input {
            padding: 0.5rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #00c600;
            &:focus-visible {
              border: 1px solid #0064d5;
            }
          }
          & button {
            margin: 1rem auto 0;
          }
        }
        & #close {
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
          & button {
            background: url('./../assets/images/close-icon.png') no-repeat center/contain;
            border: none;
            width: 1rem;
            height: 1rem;
            margin: 0;
          }
        }
      }

      #visitorInfo, #response {
        width: 50%;
        box-sizing: border-box;
        padding: 1rem;
        box-shadow: 0 0.25rem 0.25rem #0e0e0e80;
        border-radius: 0.5rem;
        border: 1px solid #0e0e0e33;
        & h2 {
          font-family: 'Acumin', sans-serif;
          text-align: center;
          color: #0064d5;
        }
        & p {
          font-family: 'Roboto', sans-serif;
          width: 20rem;
          margin: 0.25rem auto;
          font-weight: bold;
        }
        & button, & .button {
          margin: 1rem auto;
          display: block;
          width: max-content
        }
      }

      @media (500px < width < 1024px){
        .container {
          height: 100%;
        }
        #visitorInfo, #response {
          width: 80%;
        }
      }
      @media (max-width: 500px) {
        .container {
          height: 100%;
        }
        #visitorInfo, #response {
          width: 90%;
        }
      }
    `
  ];

  static get properties() {
    return {
      user: { type: String },
      password: { type: String },
      eventId: { type: String },
      attendees: { type: Array }
    };
  }

  constructor() {
    super();
    this.db = new DB();
    this.user = '';
    this.password = '';
    this.eventId = window.location.hash.split('?')[1];
    this.visitor = {};
    this.attendees = {};
    this.isRegistered = '';
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.eventId) {
      this.getVisitorInfo();
    }
  }

  renderEventAttendance() {
    if (Object.keys(this.visitor).length === 0) {
      return html`<p>No hay información del visitante, por favor inténtalo más tarde</p>`;
    } else {
      return html`
        <div id="visitorInfo">
          <h2>Visitante</h2>
          <p>Nombre: ${this.visitor[0].name}</p>
          <p>Empresa: ${this.visitor[0].company}</p>
          <p>Puesto: ${this.visitor[0].position}</p>
          <p>Email: ${this.visitor[0].email}</p>
          <p>Teléfono: ${this.visitor[0].phone}</p>
          <button class="button primary" @click="${this.renderLogin}">Registrar asistencia</button>
        </div>

        <div id="response" hidden>
          <h2>Registro de asistencia</h2>
          <p>${this.isRegistered.error ? this.isRegistered.message : "¡Asistencia registrada con éxito!"}</p>
          <a href="/#inicio" class="button primary">Regresar al inicio</a>
        </div>

        <dialog id="loginDialog">
          <div id="close"> <button @click="${this.closeDialog}" type="button"></button> </div>
          <h2>Iniciar sesión</h2>
          <form @submit="${this.handleLogin}">
            <label for="user">Usuario</label>
            <input type="text" id="user" name="user" .value="${this.user}" @input="${this.handleUserChange}">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" .value="${this.password}" @input="${this.handlePasswordChange}">
            <button class="button" type="submit">Iniciar sesión</button>
          </form>
        </dialog>
      `;
    }
  }

  closeDialog() {
    const dialog = this.shadowRoot.getElementById('loginDialog');
    dialog.close();
  }

  renderLogin() {
    const dialog = this.shadowRoot.getElementById('loginDialog');
    dialog.showModal();
  }

  render() {
    return html`
      <div class="container">
        ${this.renderEventAttendance()}
      </div>
    `;
  }

  handleUserChange(event) {
    this.user = event.target.value;
  }

  handlePasswordChange(event) {
    this.password = event.target.value;
  }

  async handleLogin(event) {
    event.preventDefault();
    console.log(event);
    const predefinedUser = 'expo';
    const predefinedPassword = 'autotransporte';
    if (this.user === predefinedUser && this.password === predefinedPassword) {
      let today = new Date();
      let day = 0;
      if (today.getMonth() === 3) {
        switch (today.getDate()) {
          case 14:
            day = 1;
            break;
          case 15:
            day = 2;
            break;
          case 16:
            day = 3;
            break;
          default:
            day = 1;
            break;
        }
        this.isRegistered = await this.db.insertVisit(this.visitor[0].id, day);
      }
      else {
        this.isRegistered = {error: true, message: "No es posible registrar la asistencia en este momento."};
      }
      console.log(this.isRegistered);
      const dialog = this.shadowRoot.getElementById('loginDialog');
      dialog.close();
      let visitorInfoSection = this.shadowRoot.getElementById('visitorInfo');
      visitorInfoSection.hidden = true;
      let responseSection = this.shadowRoot.getElementById('response');
      responseSection.hidden = false;
      this.requestUpdate();
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  async getVisitorInfo() {
    this.visitor = await this.db.getDataById(this.eventId);
    this.requestUpdate();
  }
}

customElements.define('register-attendance-page', RegisterAttendance);