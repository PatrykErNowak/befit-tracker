import { useClickAway } from 'react-use';

import { IoLogOut, IoMenuOutline } from 'react-icons/io5';

import styled from 'styled-components';
import { useRef, useState } from 'react';
import { IoIosSettings } from 'react-icons/io';
import MenuButton from './Buttons/MenuButton';
import { NavLink } from 'react-router-dom';

const StyledNavMoreOptions = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonExt = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-brand-100);
  background-color: transparent;
  border: transparent;

  svg {
    font-size: 3.5rem;
  }
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 0;
  color: var(--color-grey-50);
  background-color: var(--color-brand-800);
  border-top-right-radius: var(--border-radius-tiny);
  border-top-left-radius: var(--border-radius-tiny);
  transform: translateY(-100%);
`;

function NavMoreOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <StyledNavMoreOptions>
      <ButtonExt onClick={() => setIsOpen((prev) => !prev)}>
        <IoMenuOutline />
      </ButtonExt>
      {isOpen && (
        <OptionsList ref={ref}>
          <li>
            <MenuButton icon={<IoIosSettings />} label="Profile" as={NavLink} to={'profile'} />
          </li>
          <li>
            <MenuButton icon={<IoLogOut />} label="Logout" />
          </li>
        </OptionsList>
      )}
    </StyledNavMoreOptions>
  );
}

export default NavMoreOptions;
