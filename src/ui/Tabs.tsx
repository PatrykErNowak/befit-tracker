import { cloneElement, createContext, SyntheticEvent, useContext, useState } from 'react';

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

  return <TabsContext.Provider value={{ tab, setTab }}>{children}</TabsContext.Provider>;
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

  return cloneElement(children, { onClick: handleClick, className: tab === opens ? 'active' : '' });
}

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
Tabs.Content = Content;

export default Tabs;
