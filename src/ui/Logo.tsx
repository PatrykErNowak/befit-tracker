import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 2em;
  height: 2em;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.15));

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
  }
`;

function Logo({ ...props }) {
  return (
    <StyledLogo {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        clipRule="evenodd"
        fillRule="evenodd"
        height="211.63"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 212.61 211.63"
        width="212.61">
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="a" x1="128.19" x2="10.05" y1="89.65" y2="214.61">
            <stop offset="0" stopColor="#10b981" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M177.36 101.79c-60.72,-8.85 -96.88,17.27 -108.48,78.38 15.41,-8.37 30.47,-23.61 45.15,-45.72 -5.09,13.59 -13.71,29.02 -25.84,46.29 84.78,-0.91 49.4,-55.63 89.17,-78.95zm-154.21 -13.06c-9.39,34.89 -0.4,62.05 26.98,81.51 66.09,-56.49 -47.6,-80.2 -11.9,-144.17 0.3,-0.54 0.61,-1.08 0.94,-1.63 -1.29,1.07 -2.55,2.17 -3.79,3.31 -15.39,17.76 -25.74,34.94 -31.05,51.54 -20.75,64.88 36.14,132.35 102.46,132.35 58.44,0 105.81,-47.37 105.81,-105.81 0,-58.44 -47.37,-105.81 -105.81,-105.81 -0.24,0 -0.48,0 -0.72,0 54.65,0.38 98.83,44.79 98.83,99.53 0,54.97 -44.56,99.53 -99.53,99.53 -58.89,0 -109.39,-53.57 -82.22,-110.34z"
            fill="url(#a)"
          />
          <path
            d="M76.05 33.28L99.11 33.28 99.11 57.39 123.22 57.39 123.22 80.45 99.11 80.45 99.11 104.56 76.05 104.56 76.05 80.45 51.94 80.45 51.94 57.39 76.05 57.39z"
            fill="#10b981"
          />
        </g>
      </svg>
    </StyledLogo>
  );
}

export default Logo;
