import { createGlobalStyle } from 'styled-components';
import { breakpoint } from './configStyles';

const GlobalStyles = createGlobalStyle`
:root {

  /* Grey color */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;
  
  
  /* Brand color */
  --color-brand-50: #f0fdfa;
  --color-brand-100: #e8f8f6;
  --color-brand-200: #b9eae4;
  --color-brand-300: #8adcd3;
  --color-brand-400: #2dd4bf;
  --color-brand-500: #14b8a6;
  --color-brand-600: #0d9488;
  --color-brand-700: #0f766e;
  --color-brand-800: #505f60;
  --color-brand-900: #282f30;

  // Call to Action color
  --color-cta: #E76F51;


  /* State color */
  --success-color: #22c55e;
  --error-color: #e11d48;
  
  /*  --------------------------------------------------- */


  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

  --image-grayscale: 0;
  --image-opacity: 100%;
  

  /* Border */
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--color-grey-800);
  background-color: var(--color-brand-50);

  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: clamp(1.3rem, 0.5rem + 0.6vw, 1.9rem);
  overflow-x: hidden;
}





input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}


/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  font-family: inherit;
  color: inherit;
}

ul {
  list-style: none;
}


h1,h2,h3,h4,h5,h6 {
  /* font-family: "Lato", sans-serif; */
  font-family: "Inter", sans-serif;
  color: var(--color-brand-800);
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

h1 {
  font-size: clamp(2.5rem, 1.5rem + 1.4vw, 5rem);
  font-weight: 800;
}
h2 {
  font-size: clamp(2rem, 1.2rem + 1vw, 3.5rem);
}


img {
  max-width: 100%;
}

.toast {
  font-size: 1.5rem;

  @media screen  and (min-width: ${breakpoint.laptop}){
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 400;
    background-color: var(--color-brand-50);
  }
}



`;

export default GlobalStyles;
