import React from 'react';
import { NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';

const OptionItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.8rem 1.6rem;
  font-size: 1.5rem;
  text-decoration: none;
  background-color: transparent;
  border: transparent;
  border-radius: var(--border-radius-md);
  outline: none;

  svg {
    font-size: 1.4em;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    &:hover,
    &:focus {
      background-color: var(--color-brand-800);
    }
  }
`;

type MenuButtonProps = {
  icon: React.ReactElement;
  label: string;
  as?: React.ElementType;
} & (React.ComponentProps<'button'> | NavLinkProps);

function MenuButton({ icon, label, as = 'button', ...props }: MenuButtonProps) {
  return (
    <OptionItem as={as} {...props}>
      {icon}
      <span>{label}</span>
    </OptionItem>
  );
}

export default MenuButton;
