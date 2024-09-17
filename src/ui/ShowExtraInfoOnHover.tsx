import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';

const StyledShowExtraInfoOnClick = styled.div`
  position: relative;
`;

const Toggler = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--color-grey-500);
  background-color: transparent;
  border: none;
`;

const Content = styled.p`
  position: absolute;
  top: 2em;
  left: 0;
  padding: 0.9em;
  font-size: 0.7em;
  line-height: 1.5;
  border-radius: var(--border-radius-md);
  background-color: var(--color-brand-50);
  box-shadow: var(--shadow-md);
`;

type ShowExtraInfoOnClickProps = {
  label: string;
  children: string;
};

function ShowExtraInfoOnClick({ label, children }: ShowExtraInfoOnClickProps) {
  const [show, setShow] = useState(false);
  return (
    <StyledShowExtraInfoOnClick>
      <Toggler onClick={() => setShow((prev) => !prev)}>
        <FaInfoCircle /> Click to show {label}
      </Toggler>
      {show && <Content>{children}</Content>}
    </StyledShowExtraInfoOnClick>
  );
}

export default ShowExtraInfoOnClick;
