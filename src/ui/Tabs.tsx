import {
  cloneElement,
  createContext,
  SyntheticEvent,
  useContext,
  useState,
} from 'react';
import styled from 'styled-components';
import { breakpoint } from '../styles/configStyles';

// ------------------------------------------------------
// Context

type TabsContextType = {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabsContext = createContext<TabsContextType | null>(null);

// ------------------------------------------------------
// Tabs Component - Parent

type TabsProps = {
  children: React.ReactNode[];
  defaultTabOpen?: string;
};

function Tabs({ children, defaultTabOpen = '' }: TabsProps) {
  const [tab, setTab] = useState(defaultTabOpen);

  return (
    <TabsContext.Provider value={{ tab, setTab }}>
      {children}
    </TabsContext.Provider>
  );
}

// ------------------------------------------------------
// Label Component - Child

type LabelProps = {
  opens: string;
  children: React.ReactElement;
};

function Label({ opens, children }: LabelProps) {
  const { setTab, tab } = useContext(TabsContext)!;

  function handleClick(e: SyntheticEvent) {
    e.preventDefault();
    setTab(opens);
  }

  return cloneElement(children, {
    onClick: handleClick,
    className: tab === opens ? 'active' : '',
  });
}

// ------------------------------------------------------
// Label Button Component - Child

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

// ------------------------------------------------------
// Content Component - Child

type ContentProps = {
  name: string;
  children: React.ReactElement;
};

function Content({ name, children }: ContentProps) {
  const { tab } = useContext(TabsContext)!;

  if (tab === name) return <>{children}</>;

  return null;
}

// ------------------------------------------------------
// Setup

Tabs.Label = Label;
Tabs.Button = MenuButton;
Tabs.Content = Content;

export default Tabs;
