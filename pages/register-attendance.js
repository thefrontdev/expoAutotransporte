import { LitElement, html, css } from '/assets/js/lit-core.min.js';
import { styles } from "/assets/styles/styles.js";

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
      #qr-reader {
        width: 100%;
        box-sizing: border-box;
      }
      .form-group {
        margin-bottom: 1rem;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }

      .button {
        width: max-content;
        margin: 1rem auto;
        display: block;
      }

      #qr-canva {
        width: min(100%, 15rem);
        height: 20rem;
        aspect-ratio: auto 480 / 640;
        margin-top: 2rem;
      }
    `
  ];

  constructor() {
    super();
    this.visitorId = '';
    this.scanning = false;
    this.readIterations = 0;
  }

  firstUpdated() {
    this.video = document.createElement('video');
    this.canvasElement = this.shadowRoot.querySelector('#qr-canvas');
    this.canvas = this.canvasElement.getContext('2d');
    this.btnScanQR = this.shadowRoot.querySelector('#btnScanQr');
    this.btnRegistry = this.shadowRoot.querySelector('#btnRegistry');
    this.readQr = this.shadowRoot.querySelector('#qr-reader');
    this.message = this.shadowRoot.querySelector('#message');
  }

  cameraOn() {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        this.scanning = true;
        // this.btnScanQR.hidden = true;
        this.canvasElement.hidden = false;
        this.video.setAttribute('playsinline', true);
        this.video.srcObject = stream;
        this.video.play();
        this.tick();
        this.scan();
      });
  }

  tick() {
    this.canvasElement.height = this.video.videoHeight;
    this.canvasElement.width = this.video.videoWidth;
    this.canvas.drawImage(this.video, 0, 0, this.canvasElement.width, this.canvasElement.height);

    this.scanning && requestAnimationFrame(() => this.tick());
  }

  scan() {
    try {
      qrcode.decode();
    } catch (e) {
      if (this.readIterations < 50) {
        this.readIterations++; 
        setTimeout(() => this.scan(), 300);
      }
      else {
        this.cameraOFF();
      }
    }
  }

  cameraOFF() {
    this.video.srcObject.getTracks().forEach((track) => {
      track.stop();
    });
    this.canvasElement.hidden = true;
    this.btnScanQR.hidden = false;
    this.readQr.hidden = true;
    this.message.hidden = false;
  }
  

  registerAttendance() {
    // Aquí puedes agregar la lógica para registrar la asistencia
    console.log(`Registrando asistencia para el visitante con ID: ${this.visitorId}`);
    this.btnScanQR.hidden = false;
  }

  render() {
    return html`
      <div class="container">
        <div id="qr-reader">
          <h1>Registrar Asistencia</h1>
          <div class="form-group">
            <canvas hidden="" id="qr-canvas"></canvas>
            <button @click="${this.cameraOn}" id="btnScanQr" class="button primary">Leer código</button>
          </div>
          <button @click="${this.registerAttendance}" id="btnRegistry" hidden="">Registrar</button>
        </div>
        <div id="message" hidden="">
          <h1>Se ha registrado la asistencia</h1>
          <a href="/" class="button primary">Regresar al inicio</a>
        </div>
      </div>
    `;
  }
}

customElements.define('register-attendance', RegisterAttendance);

qrcode.callback = (respuesta) => {
  if (respuesta) {
    console.log(respuesta);
    this.cerrarCamara();
  }
};