import styled from 'styled-components';

import LoginForm from '../../features/auth/LoginForm';
import Heading from '../../ui/Heading';
import BreakLine from '../../ui/BreakLine';
import Logo from '../../ui/Logo';
import Container from '../../ui/Container';

import Link from '../../ui/LinkCustom';
import Text from '../../ui/Text';
import { breakpoint } from '../../styles/configStyles';

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

const LogoExt = styled(Logo)`
  font-size: 4rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    font-size: 5rem;
  }
`;

function Login() {
  return (
    <LoginPageLayout>
      <Container>
        <LogoExt />
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
