import { LitElement, html, css } from '/assets/js/lit-core.min.js';
import { styles } from "/assets/styles/styles.js";

class EventRegistrationForm extends LitElement {
  static styles = [
  styles,
  css`
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
    }
    @media (width < 1024px){
      .container {
        height: 100%;
      }
      .form-container {
        width: 80%;
      }
    }
  `];

  render() {
    return html`
    <main class="container">
      <div class="form-container">
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
          <img id="qrcode" width="100" height="100"/>
        </form>
      </div>
    </main>
    `;
  }

  generateQR() {
    const qrelement = this.shadowRoot.querySelector('#qrcode');
    console.log(qrelement);
    qrelement.setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?data=https://google.com.mx');
    console.log(qrelement);
  }

  _handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      event: formData.get('event')
    };
    this.generateQR();
    console.log('Form Data Submitted:', data);
  }
}

customElements.define('visitors-registration', EventRegistrationForm);