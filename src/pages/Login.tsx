import styled from 'styled-components';

import LoginForm from '../features/auth/LoginForm';
import Heading from '../ui/Heading';
import BreakLine from '../ui/BreakLine';
import Logo from '../ui/Logo';
import Container from '../ui/Container';

import Link from '../ui/LinkCustom';
import Text from '../ui/Text';

const LoginPageLayout = styled(Container)`
  gap: 3.5rem;
  padding: 3rem 2rem;
  min-height: 100dvh;
`;

const LoginContent = styled(Container)`
  gap: 3.5rem;
  width: 100%;
  max-width: 40rem;
`;

function Login() {
  return (
    <LoginPageLayout>
      <Container>
        <Logo />
        <Heading as="h1">
          Be<span>Fit</span> Tracker
        </Heading>
      </Container>
      <LoginContent>
        <LoginForm />
        <BreakLine text="or" />
        <Text>
          Are you new? <Link to={'/app/create-account'}>Create an account</Link>
        </Text>
      </LoginContent>
    </LoginPageLayout>
  );
}

export default Login;
