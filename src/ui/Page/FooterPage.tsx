import styled from 'styled-components';
import Wrapper from '../Wrapper';
import { breakpoint } from '../../styles/configStyles';
import { MdWebAsset } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { getCurrentYear } from '../../utils/helpers';

const StyledFooterPage = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 0.8em;
  color: var(--color-grey-200);
  background-color: var(--color-brand-600);
  border-radius: 50px 50px 0 0;

  @media screen and (min-width: ${breakpoint.laptop}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 1rem 4rem;
    text-align: start;
  }
`;

const SocialsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Social = styled.a`
  display: flex;
  align-items: center;
  font-size: 2em;

  @media screen and (min-width: ${breakpoint.laptop}) {
    &:hover,
    &:focus {
      color: var(--color-brand-400);
      outline: none;
    }
  }
`;

function FooterPage() {
  return (
    <Wrapper>
      <StyledFooterPage>
        <SocialsBox>
          <Social href="https://pendev.me/">
            <MdWebAsset />
          </Social>
          <Social href="https://github.com/PatrykErNowak">
            <FaGithub />
          </Social>
          <Social href="https://www.linkedin.com/in/patryk-ernest-nowak/">
            <FaLinkedinIn />
          </Social>
        </SocialsBox>
        <p>&copy; Copyright {getCurrentYear()} Pendev. All rights reserved.</p>
      </StyledFooterPage>
    </Wrapper>
  );
}

export default FooterPage;
