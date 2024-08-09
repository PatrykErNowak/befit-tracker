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
    color: var(--color-brand-900);
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

const MenuButton = styled.button`
  padding: 0.5rem 2rem;
  font-weight: 600;
  background-color: transparent;
  border: transparent;
  border-bottom: 3px solid var(--color-brand-300);

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--color-brand-400);
  }

  &.active {
    border-color: var(--color-brand-500);
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    border-width: 4px;
  }
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
            <MenuButton>Profile</MenuButton>
          </Tabs.Label>
          <Tabs.Label opens="goals">
            <MenuButton>Goals</MenuButton>
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
