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

  body {
    background-color: #fafafa;
    font-family: 'Acumin', sans-serif;
  }


  .container {
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
  }

  .button {
    background: #0064d5;
    color: #fafafa;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    box-shadow: 0.25rem 0.25rem 0.25rem #0e0e0e80;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s, box-shadow 0.1s;
    &.primary {
      font-size: 1.125rem;
    }
    &:hover {
      background: #0075d5;
      color: #1d3365;
    }
    &:active{
      box-shadow: none;
    }
  }

  .section-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    .container {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  
`;