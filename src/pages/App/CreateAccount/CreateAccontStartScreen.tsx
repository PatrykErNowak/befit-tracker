import styled from 'styled-components';
import ContainerWithBg from '../../../ui/ContainerWithBg';
import Heading from '../../../ui/Heading';
import Text from '../../../ui/Text';
import LinkCustom from '../../../ui/LinkCustom';
import Container from '../../../ui/Container';
import SignupForm from '../../../features/auth/SignUpForm';
import { breakpoint } from '../../../styles/configStyles';

const StyledCreateAccontStartScreen = styled.div`
  display: grid;
  gap: 3rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoContainer = styled(ContainerWithBg)`
  text-align: center;
`;

function CreateAccontStartScreen() {
  return (
    <StyledCreateAccontStartScreen>
      <InfoContainer>
        <Heading as="h2">Come join us!</Heading>
        <Text>
          We are so excited to have you here. If you haven't already, create an
          account to get access to store and track your lifestyle data.
        </Text>

        <Text>
          Already have an account?{' '}
          <LinkCustom to="/app/login">Log in &rarr;</LinkCustom>
        </Text>
      </InfoContainer>
      <Container>
        <SignupForm />
      </Container>
    </StyledCreateAccontStartScreen>
  );
}

export default CreateAccontStartScreen;
