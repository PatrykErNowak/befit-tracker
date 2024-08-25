import styled from 'styled-components';
import Heading from '../../ui/Heading';
import { breakpoint } from '../../styles/configStyles';
import UpdateUserProfileForm from '../../features/auth/UpdateUserProfileForm';
import Tabs from '../../ui/Tabs';
import UpdateUserGoalsForm from '../../features/auth/UpdateUserGoalsForm';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding: 1.5rem 1rem 0;
  text-align: center;
  background-color: var(--color-brand-200);

  h1 {
    color: var(--color-grey-700);
    font-weight: 800;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 2.5rem 5rem 0;
    gap: 2rem;
    text-align: start;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    gap: 3rem;
    padding: 3.5rem 6rem 0;
  }
`;

const NavMenu = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 2rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 3rem 5rem;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    padding: 3.5rem 6rem;
  }
`;

function Settings() {
  return (
    <Tabs defaultTabOpen="profile">
      <Header>
        <Heading $opacity={1}>Settings</Heading>
        <NavMenu>
          <Tabs.Label opens="profile">
            <Tabs.Button>Profile</Tabs.Button>
          </Tabs.Label>
          <Tabs.Label opens="goals">
            <Tabs.Button>Goals</Tabs.Button>
          </Tabs.Label>
        </NavMenu>
      </Header>

      <Content>
        <Tabs.Content name="profile">
          <UpdateUserProfileForm />
        </Tabs.Content>
        <Tabs.Content name="goals">
          <UpdateUserGoalsForm />
        </Tabs.Content>
      </Content>
    </Tabs>
  );
}

export default Settings;
