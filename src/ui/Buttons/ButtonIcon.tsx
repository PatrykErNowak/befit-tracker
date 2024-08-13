import styled from 'styled-components';

const ButtonIcon = styled.button<{
  $size?: number;
}>`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover svg {
    color: var(--color-brand-700);
  }

  & svg {
    width: ${({ $size = 2.4 }) => $size + 'rem'};
    height: ${({ $size = 2.4 }) => $size + 'rem'};
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
