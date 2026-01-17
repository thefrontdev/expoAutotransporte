import { LitElement, html, css } from "/assets/js/lit-core.min.js";

export class AudenceReach extends LitElement {
    static styles = css`
        section {
            position: relative;
            padding: 5rem 7.5rem;
            & h2::before {
                content: '';
                position: absolute;
                left: 0;
                z-index: -1;
                display: block;
                width: 8%;
                height: 2px;
                background: linear-gradient(90deg, #05070c, var(--border80), var(--neon));
                margin-top: 1rem;
                box-shadow: 10px 0 20px var(--neon);
            }
        }

        .bento {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: stretch;
            height: auto;
            box-sizing: border-box;
            margin-bottom: 2rem;
        }

        .card {
            width: 16.5rem;
            max-width: 100%;
            box-sizing: border-box;
            background: linear-gradient(180deg, rgba(14,21,43,.7), rgba(5,7,12,.9));
            border-radius: var(--radius);
            border: 1px solid rgba(0,240,255,.25);
            backdrop-filter: blur(12px);
            box-shadow:
                0 0 0 1px rgba(0,240,255,.15),
                0 10px 30px rgba(0,0,0,.4),
                inset 0 0 20px rgba(0,240,255,.05);
            padding: 1.25rem;
            transition:
                transform .35s var(--ease),
                box-shadow .35s var(--ease),
                border-color .35s var(--ease);
            text-align: center;
            & img {
                margin: 0 auto;
                filter: drop-shadow(0px 0px 4px #000ffacc);
            }
        }

        .card::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            opacity: 0;
            transition: .35s;
            background: linear-gradient(120deg, transparent, #000ffa33, transparent);
        }

        .card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow:
                0 0 0 1px rgba(0,240,255,.6),
                0 0 40px rgba(0,240,255,.6),
                0 30px 60px rgba(0,0,0,.6);
            & img {
                filter: drop-shadow(0px 0px 3px #00faff88);
            }
        }

        .card:hover::after {
            opacity: 1;
        }

        .card-title {
            font-size: 1.125rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
            .card {
                backdrop-filter: none;
            }
        }
            
        @media (max-width: 480px) {
            section {
                padding: 4rem 2.5rem;
                & .bento {
                    width: 100%;
                    box-sizing: border-box;
                    flex-flow: column;
                    gap: 1rem;

                    & .card {
                        width: 100%;
                    }
                }
            }
        }
    `;
    render() {
        return html`
            <section>
                <h2>Una audiencia que convierte en negocio</h2>
                <p>Expo Autotransporte Toluca – Hub 360 convoca a una audiencia <strong>especializada y con poder de decisión</strong>:</p>
                <div class="bento">
                    <div class="card">
                        <img alt="Icono de ejecutivos" src="/assets/images/icons/director.png" />
                        <p class="card-title">Directores, gerentes y jefaturas.</p>
                    </div>
                    <div class="card">
                        <img alt="Icono de compras" src="/assets/images/icons/sales.png" />
                        <p class="card-title">Compras, operaciones, logística y mantenimiento.</p>
                    </div>
                    <div class="card">
                        <img alt="Icono de líderes técnicos" src="/assets/images/icons/technical-leaders.png" />
                        <p class="card-title">Líderes técnicos y estratégicos.</p>
                    </div>
                    <div class="card">
                        <img alt="Icono de instituciones" src="/assets/images/icons/institutions.png" />
                        <p class="card-title">Instituciones y asociaciones del sector.</p>
                    </div>
                </div>
                <p>
                    Aquí no se generan contactos fríos. <br>
                    Se generan <strong>leads con intención real de compra, alianza o inversión</strong>, en un entorno diseñado para el networking estratégico.
                </p>
            </section>
        `;
    }
}

customElements.define('audence-reach', AudenceReach);