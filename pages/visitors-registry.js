import { LitElement, html, css } from '/assets/js/lit-core.min.js';
import { styles } from "/assets/styles/styles.js";
import { DB } from '/assets/js/db.js';

class EventRegistrationForm extends LitElement {
  static styles = [
  styles,
  css`
    .hidden {
      display: none;
    }
    .container {
      height: calc(100vh - 14.25rem);
      min-height: max-content;
      padding: 4rem 0;
      box-sizing: border-box;
      display: grid;
      place-items: center;
    }
    .form-container {
      width: 50%;
      box-sizing: border-box;
      padding: 1rem;
      box-shadow: 0 0.25rem 0.25rem #0e0e0e80;
      border-radius: 0.5rem;
      border: 1px solid #0e0e0e33;
      & h2 {
        font-family: 'Acumin', sans-serif;
        text-align: center;
      }
      & form {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
        & label {
          margin-top: 10px;
          font-family: 'Roboto', sans-serif;
        }
        & input {
          margin-top: 5px;
          padding: 8px;
          font-size: 16px;
          border-radius: 0.5rem;
          border: 1px solid #00c600;
          &:focus-visible {
            border: 1px solid #0064d5;
          }
        }

        & .address-section {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          & div {
            width: 45%;
            display: flex;
            flex-direction: column;
          }
        }
        & #policy-privacy-check {
          accent-color: #00c600;
          margin: 1rem 0;
        }
      }
      & button {
        margin-top: 2rem;
        width: max-content;
        align-self: end;
      }
      &[hidden] {
        display: none;
      }
    }
    #success, #error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      &.hidden {
        display: none;
      }
      & p {
        margin: 1rem 0;
      }
      & .button {
        margin-top: 1rem;
      }
    }

    @media (500px < width < 1024px){
      .container {
        height: 100%;
      }
      .form-container {
        width: 80%;
      }
    }
    @media (max-width: 500px) {
      .container {
        height: 100%;
      }
      .form-container {
        width: 90%;
      }
    }
  `];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.showForm = true;
    this.showSucess = false;
    this.showError = false;
    this.name = '';
    this.id = '';
  }

  sendEmail(name, email, id) {
    const templateParams = {
      to_name: name,
      to_email: email,
      message: '¡Gracias por registrarte en la Expo Autotransporte! Estamos emocionados de contar contigo en este gran evento, donde exploraremos lo último en tecnología, innovación y tendencias del autotransporte.\n Para agilizar tu acceso el día del evento, por favor guarda y presenta el código QR adjunto. Este código es tu pase personal y será necesario para el ingreso.',
      id,
    };

    emailjs.init({
      publicKey: 'Qegkd8YnDmsyZ1VwZ',
      limitRate: {
        id: 'app',
        throttle: 5000,
      },
    });

    emailjs.send('ser_expo_autotransportes', 'template_expo_auto', templateParams).then(
      (response) => {
        console.log("Correo enviado", response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  }

  async _handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('tel'),
      company: formData.get('company'),
      position: formData.get('position'),
      address: formData.get('address'),
      postalCode: formData.get('cp'),
      state: formData.get('state'),
      municipality: formData.get('municipality'),
      neighborhood: formData.get('neighborhood'),
      country: formData.get('country'),
    };
    const db = new DB();
    const insertedData = await db.insertData(data);
    console.log(insertedData);
    this.showForm = false;
    this.showError = insertedData.error;
    this.messageError = insertedData.error ? insertedData.message: '';
    if(!insertedData.error) this.sendEmail(insertedData[0].name, insertedData[0].email, insertedData[0].id);
    this.tname = !insertedData.error ? insertedData[0].name : '';
    this.id = !insertedData.error ? insertedData[0].id : '';
    this.showSucess = !insertedData.error;
    this.requestUpdate();
    return 
  }

  render() {
    return html`
    <main class="container">
      <div class="form-container ${!this.showForm ? 'hidden' : ''}" ?hidden=${!this.showForm}>
        <h2>Por favor llena el formulario para participar</h2>
        <form @submit="${this._handleSubmit}">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label for="tel">Teléfono:</label>
          <input type="tel" id="tel" name="tel" required />

          <label for="company">Empresa:</label>
          <input type="text" id="company" name="company" required />

          <label for="position">Puesto:</label>
          <input type="text" id="position" name="position" required />

          <div class="address-section">
            <div>
              <label for="address">Dirección:</label>
              <input type="text" id="address" name="address" required />
            </div>

            <div>
              <label for="cp">Código postal:</label>
              <input type="text" id="cp" name="cp" required />
            </div>

            <div>
              <label for="state">Estado:</label>
              <input type="text" id="state" name="state" required />
            </div>
          
              <div>
                <label for="municipality">Municipio/Alcaldía:</label>
                <input type="text" id="municipality" name="municipality" required />
              </div>
          
            <div>
              <label for="neighborhood">Colonia:</label>
              <input type="text" id="neighborhood" name="neighborhood" required />
            </div>
          
            <div>
              <label for="country">Pais:</label>
              <input type="text" id="country" name="country" required />
            </div>
            </div>
            <div>
              <input type="checkbox" id="policy-privacy-check" name="policy-privacy-check" required />
              <label for="policy-privacy-check">He leído el Aviso de Privacidad</label>
            </div>
          
          <button class="button" type="submit">Registrarse</button>
        </form>
      </div>
      
      <div id="success" class="form-container ${!this.showSucess ? 'hidden' : ''}">
        <img src="/assets/images/truck-check.svg" alt="Camión con palomita">
        <p>¡FELICIDADES!</p>
        <p>
          Gracias por registrarte ${this.name}, en breve recibiras un correo electrónico (recuerda revisar tu carpeta de <i>"SPAM"</i> o <i>"Correo no deseado"</i>.
          <br>
          Para agilizar tu acceso el día del evento, por favor guarda y presenta el código QR que se encuentra debajo. Este código es tu pase personal y será necesario para el ingreso.
          </p>
          <a href="https://api.qrserver.com/v1/create-qr-code/?data=visitante-${this.id}-expoautotransporte" download="QR.png">
            <img src="https://api.qrserver.com/v1/create-qr-code/?data=visitante-${this.id}-expoautotransporte" alt="Código QR" width="200px" height="200px">
          </a>
          <a href="/" class="button">Regresar al inicio</a>
      </div>
      
      <div id="error" class="form-container ${!this.showError ? 'hidden' : ''}">
        <img src="/assets/images/tow-truck.svg" alt="Grua">
        <p>¡OH NO!</p>
        <p>
          ${this.messageError}
        <p>
        <a href="/" class="button">Regresar al inicio</a>
      </div>

    </main>
    `;
  }
}

customElements.define('visitors-registry', EventRegistrationForm);