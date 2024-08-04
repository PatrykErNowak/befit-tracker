import styled from 'styled-components';

const HeaderAppSection = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  column-gap: 2rem;
  align-items: end;

  position: relative;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-grey-200);
  }
`;

export default HeaderAppSection;
