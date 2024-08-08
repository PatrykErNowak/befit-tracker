import styled from 'styled-components';
import Button from '../Buttons/Button';
import { breakpoint } from '../../styles/configStyles';
import { Link } from 'react-router-dom';

const StyledWorkAnywherePage = styled.section`
  display: grid;
  margin: 5rem 0;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    gap: 8rem;
    height: 100%;
  }
`;

const Hero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 50dvh;
  width: 150%;
  left: 50%;
  background-color: #feeeef;
  transform: translateX(-50%);
  clip-path: polygon(0 0%, 100% 0, 100% 100%, 0% 80%);

  img {
    max-height: 40dvh;
    object-fit: contain;
    display: block;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    align-items: center;
    width: 100%;
    clip-path: none;
    height: 60dvh;
    border-radius: 100px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 3rem;

  h3 {
    font-weight: 800;
    font-size: clamp(3rem, 2.5rem + 1.5vw, 4.5rem);
  }

  p {
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-weight: 600;
    color: var(--color-grey-400);
    line-height: 1.6;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    align-items: flex-start;

    p {
      width: 70%;
    }
  }
`;

function WorkAnywherePage() {
  return (
    <StyledWorkAnywherePage>
      <Hero>
        <img
          src="./img/crossplatform.webp"
          alt="3 device types: laptop, tablet and mobile phone"
          loading="lazy"
        />
      </Hero>

      <ContentBox>
        <h3>
          Work anywhere, <br /> with any device
        </h3>
        <p>
          From your cell phone, tablet or desktop computer, use our app from
          where you want and when you want - you don't have to pay for anything!
        </p>
        <Button as={Link} to={'app/create-account'} $variation="secondary">
          Get Started
        </Button>
      </ContentBox>
    </StyledWorkAnywherePage>
  );
}

export default WorkAnywherePage;
