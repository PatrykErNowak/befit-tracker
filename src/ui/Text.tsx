import styled, { css } from 'styled-components';

const Text = styled.p<{ $grey?: boolean; $light?: boolean; $opacity?: number }>`
  line-height: 1.6;

  ${({ $grey, $light }) => {
    if ($grey)
      return css`
        color: var(--color-grey-500);
      `;

    if ($light)
      return css`
        color: var(--color-brand-50);
      `;
    else return '';
  }}
  opacity: ${({ $opacity = 1 }) => $opacity}
`;

export default Text;
