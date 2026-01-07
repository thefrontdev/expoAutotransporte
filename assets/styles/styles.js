import { css } from '/assets/js/lit-core.min.js';

export const styles = css`

  @font-face {
    font-family: 'Acumin';
    src: url('/assets/fonts/Acumin\ Variable\ Concept.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto/Roboto-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/assets/fonts/Roboto/Roboto-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  * {
    margin: 0;
    padding: 0;
  }

  h2::after {
    content: '';
    display: block;
    width: 100vw;
    height: 2px;
    background: var(--neon);
    margin-top: 16px;
    box-shadow:
      0 0 10px var(--neon),
      0 0 30px var(--neon55);
  }
  
`;