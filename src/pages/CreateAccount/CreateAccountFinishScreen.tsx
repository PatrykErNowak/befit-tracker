import styled from 'styled-components';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Icon from '../../ui/Icon';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import Text from '../../ui/Text';
import Button from '../../ui/Buttons/Button';
import { Link } from 'react-router-dom';

const StyledCreateAccountFinishScreen = styled(Container)`
  gap: 1rem;
  padding: 3rem 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  button,
  a {
    margin-top: 2rem;
  }
`;

function CreateAccountFinishScreen({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <StyledCreateAccountFinishScreen {...props}>
      <Heading as="h2">Congratulations!</Heading>
      <Icon>
        <BsFillPersonCheckFill />
      </Icon>
      <Text>Your account has been successfuly created.</Text>
      <Text>Before log in, please check your registered email for email verification.</Text>
      <Button as={Link} to={'/app/login'}>
        Go to login page
      </Button>
    </StyledCreateAccountFinishScreen>
  );
}

export default CreateAccountFinishScreen;
