import { LitElement, html, css } from "/assets/js/lit-core.min.js";

export class AuthorityEcosystem extends LitElement {
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
        
        .hub {
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-columns: 1fr 1fr;
            padding: 2rem;
            background: 
                radial-gradient(
                    circle at center,
                    transparent 40%,
                    #191919 60%
                ),
                radial-gradient(
                    circle at center,
                    #191919cc 9%,
                    #000ffa80 10%,
                    transparent 11%
                ),   
                conic-gradient(
                    transparent 74deg, #000ffa80 76deg, 
                    transparent 78deg, transparent 102deg, 
                    #000ffa80 104deg, transparent 106deg, 
                    transparent 254deg, #000ffa80 256deg, 
                    transparent 258deg, transparent 281deg, 
                    #000ffa80 283deg, transparent 285deg
                );
        }
        
        .card {
            width: 16.25rem;
            box-sizing: border-box;
            background: linear-gradient(180deg, rgba(14,21,43,.7), rgba(5,7,12,.9));
            border-radius: var(--radius);
            border: 1px solid rgba(0,240,255,.25);
            backdrop-filter: blur(12px);
            box-shadow:
                0 0 0 1px rgba(0,240,255,.15),
                0 10px 30px rgba(0,0,0,.4),
                inset 0 0 20px rgba(0,240,255,.05);
            padding: 28px;
            transition:
                transform .35s var(--ease),
                box-shadow .35s var(--ease),
                border-color .35s var(--ease);
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
        }

        .card:hover::after {
            opacity: 1;
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
    `;
    
    render() {
        return html`
        <section>
            <h2>Un evento respaldado por la industria</h2>
            <p>
                Expo Autotransporte Toluca se ha consolidado como <strong>el punto de encuentro clave del sector en el centro del país</strong>.
            </p>
            <div class="hub">
                <div class=card>
                    <p class="card-title">Respaldo institucional y asociaciones estratégicas.</p>
                </div>
                <div class=card>
                    <p class="card-title">Participación de marcas líderes y referentes técnicos.</p>
                </div>
                <div class=card>
                    <p class="card-title">Resultados comprobados en asistencia, alcance y generación de negocios.</p>
                </div>
                <div class=card>
                    <p class="card-title">Crecimiento sostenido edición tras edición.</p>
                </div>
            </div>
            <p>
                Participar es asociar tu marca con <strong>autoridad, confianza y liderazgo sectorial</strong>.
            </p>
        </section>
        `;
    }
}

customElements.define('authority-ecosystem', AuthorityEcosystem);