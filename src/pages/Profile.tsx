import styled from 'styled-components';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import { breakpoint } from '../styles/configStyles';
import UpdateUserProfileForm from '../features/auth/UpdateUserProfileForm';

const Header = styled.header`
  position: relative;
  padding: 1.5rem 1rem 2rem;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 3px;
    width: calc(100% - 4rem);
    transform: translateX(-50%);
    background-color: var(--color-brand-400);
    border-radius: 50px;
  }

  h1 {
    color: var(--color-brand-900);
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2.5rem 5rem;
    text-align: start;
  }
`;

const Content = styled.div`
  padding: 2rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 3rem 5rem;
  }
`;

function Profile() {
  return (
    <>
      <Header>
        <Heading $opacity={1}>Profile Details</Heading>
        <Text $opacity={0.8}>You can change your profile details here seamlessly.</Text>
      </Header>
      <Content>
        <UpdateUserProfileForm />
      </Content>
    </>
  );
}

export default Profile;
