import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LoginForm from '../features/auth/LoginForm';
import Heading from '../ui/Heading';
import BreakLine from '../ui/BreakLine';
import Logo from '../ui/Logo';
import Container from '../ui/Container';

import LoginBgDesktop from '../assets/img/login-bg-desktop.jpg';
import { breakpoint } from '../styles/configStyles';

const LoginPageLayout = styled(Container)`
  gap: 3.5rem;
  padding: 3rem 2rem;
  background-color: var(--color-brand-100);
  min-height: 100dvh;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-image: url(${LoginBgDesktop});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
  * {
    z-index: 10;
  }
`;

const LoginContent = styled(Container)`
  gap: 3.5rem;
  width: 100%;
  max-width: 40rem;
`;
const LoginFooter = styled.p`
  a {
    color: var(--color-brand-500);
    text-decoration: underline;
    font-weight: 600;

    @media screen and (min-width: ${breakpoint.laptop}) {
      &:hover {
        color: var(--color-brand-600);
      }
    }
  }
`;

function Login() {
  return (
    <LoginPageLayout>
      <Container>
        <Logo />
        <Heading as="h2">
          Be<span>Fit</span> Tracker
        </Heading>
      </Container>
      <LoginContent>
        <LoginForm />
        <BreakLine text="or" />
        <LoginFooter>
          Are you new? <Link to={'/app/create-account'}>Create an account</Link>
        </LoginFooter>
      </LoginContent>
    </LoginPageLayout>
  );
}

export default Login;
