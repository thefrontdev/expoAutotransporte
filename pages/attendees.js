import { LitElement, html, css } from '/assets/js/lit-core.min.js';
import { styles } from '/assets/styles/styles.js';
import {DB} from './../assets/js/db.js';


class Attendees extends LitElement {
  static styles = [
    styles,
    css`
      .container {
        height: calc(100% - 14.25rem);
        min-height: max-content;
        padding: 4rem 1rem;
        box-sizing: border-box;
        display: grid;
        place-items: center;
      }

      h2 {
        font-family: 'Acumin', sans-serif;
        text-align: center;
        color: #0064d5;
        margin-bottom: 1.5rem;
      }

      .table-container {
        width: 100%;
        overflow-x: auto;
      }

      table {
        box-sizing: border-box;
        width: 100%;
        border-collapse: collapse;
        & th, & td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        & th {
          background-color: #f2f2f2;
        }
      }

      button {
        margin-top: 1.5rem;
      }
    `
  ];

  static properties = {
    attendees: { type: Array }
  };

  constructor() {
    super();
    this.db = new DB();
    this.attendees = this.getAttendees();
  }

  async getAttendees() {
    this.attendees = await this.db.getData();
    if (this.attendees.error) {
      this.attendees = {};
    }
    this.requestUpdate();
  }

  downloadAttendees() {
    const csvContent = [
      ["Nombre", "Empresa", "Puesto", "Email", "Teléfono", "Dirección", "Día 1", "Día 2", "Día 3"],
      ...this.attendees.map(attendee => [
        attendee.name,
        attendee.company,
        attendee.position,
        attendee.email,
        attendee.phone,
        `${attendee.address}, ${attendee.neighborhood}, ${attendee.municipality}, C.P. ${attendee.postalCode}, ${attendee.state}, ${attendee.country}`,
        attendee.dia1 ? 'Sí' : 'No',
        attendee.dia2 ? 'Sí' : 'No',
        attendee.dia3 ? 'Sí' : 'No'
      ])
    ].map(e => e.join(",")).join("\n");

    const date = new Date().toISOString().split('T')[0];
    const today = date.split('-').reverse().join('');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `visitantes-${today}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {
    return html`
    <div class="container">
      <h2>Visitantes registrados</h2>
      <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Puesto</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Día 1</th>
            <th>Día 2</th>
            <th>Día 3</th>
          </tr>
        </thead>
        <tbody>
          ${this.attendees.map(attendee => html`
            <tr>
              <td>${attendee.name}</td>
              <td>${attendee.company}</td>
              <td>${attendee.position}</td>
              <td>${attendee.email}</td>
              <td>${attendee.phone}</td>
              <td>${attendee.address}, ${attendee.neighborhood}, ${attendee.municipality}, C.P. ${attendee.postalCode}, ${attendee.state}, ${attendee.country}</td>
              <td>${attendee.dia1 ? 'Sí' : 'No'}</td>
              <td>${attendee.dia2 ? 'Sí' : 'No'}</td>
              <td>${attendee.dia3 ? 'Sí' : 'No'}</td>  
            </tr>
          `)}
        </tbody>
      </table>
      </div>
      <button class="button" @click="${this.downloadAttendees}">Download CSV</button>
    </div>
    `;
  }
}

customElements.define('attendees-page', Attendees);