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
  --color-brand-50: #ecfdf5;
  --color-brand-100: #d1fae5;
  --color-brand-200: #a7f3d0;
  --color-brand-300: #6ee7b7;
  --color-brand-400: #34d399;
  --color-brand-500: #10b981;
  --color-brand-600: #059669;
  --color-brand-700: #047857;
  --color-brand-800: #065f46;
  --color-brand-900: #064e3b;

  /* Secondaru color */
  --color-brand-50: #ecfeff;
  --color-brand-100: #cffafe;
  --color-brand-200: #a5f3fc;
  --color-brand-300: #67e8f9;
  --color-brand-400: #22d3ee;
  --color-brand-500: #06b6d4;
  --color-brand-600: #0891b2;
  --color-brand-700: #0e7490;
  --color-brand-800: #155e75;
  --color-brand-900: #164e63;


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
}

body {
  font-family: "Montserrat", sans-serif;
  color: var(--color-grey-800);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.3rem;

  @media screen  and (min-width: ${breakpoint.tablet}){
    font-size: 1.4rem;
  }
  @media screen  and (min-width: ${breakpoint.laptop}){
    font-size: 1.5rem;
  }
  @media screen  and (min-width: ${breakpoint.desktop}){
    font-size: 1.6rem;
  }
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
@media screen  and (min-width: ${breakpoint.laptop}){
  input:hover,
  textarea:hover,
  select:hover {
    border: 1px solid var(--color-brand-600);
  }
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
  font-family: "Lato", sans-serif;
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
  font-size: 3rem;
  @media screen  and (min-width: ${breakpoint.laptop}){
    font-size: 4rem;
  }
}
h2 {
  font-size: 2.2rem;
  @media screen  and (min-width: ${breakpoint.laptop}){
    font-size: 2.6rem;
  }
}


img {
  max-width: 100%;
}

`;

export default GlobalStyles;
