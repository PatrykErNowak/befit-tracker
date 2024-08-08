import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';
import Wrapper from '../Wrapper';

const Header = styled.header`
  width: 100%;
  height: calc(100dvh - 7rem);
  position: relative;

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding-top: 0;
    height: 100dvh;
  }
`;

const WrapperExt = styled(Wrapper)`
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  gap: 4rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 0;

  h1 {
    font-size: clamp(4rem, 3rem + 1.8vw, 8rem);
    font-weight: 900;
    color: var(--color-grey-700);
    line-height: 1.4;
  }

  p {
    font-size: 1.1em;
    width: 90%;
    font-weight: 600;
    color: var(--color-grey-500);
  }
`;

const Hero = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  height: 55%;
  background-color: #c7edf1;
  clip-path: polygon(0 28%, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;

  img {
    max-height: 40dvh;
    object-fit: contain;
    display: block;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    position: static;
    justify-content: start;
    align-items: center;
    clip-path: none;
    height: 100%;
    width: 1000%;
    border-radius: 100px 0 0 100px;

    img {
      max-height: unset;
      height: 60dvh;
    }
  }
`;

function HeaderPage() {
  return (
    <Header>
      <WrapperExt>
        <Heading>
          <h1>
            Healthy living. <br /> Simplified.
          </h1>
          <p>
            Take controls of your goals. Track your diet, exercise, and health
            data with BeFit Tracker app.
          </p>
        </Heading>
        <Hero>
          <picture>
            <source
              media={`(max-width: ${breakpoint.laptop})`}
              srcSet="./img/woman-mobile.webp"
            />

            <source
              media={`(min-width: ${breakpoint.laptop})`}
              srcSet="./img/woman-desktop.webp"
            />
            <img
              src="./img/woman-desktop.webp"
              alt="Woman on yoga mat thinks about life balance"
            />
          </picture>
        </Hero>
      </WrapperExt>
    </Header>
  );
}

export default HeaderPage;
