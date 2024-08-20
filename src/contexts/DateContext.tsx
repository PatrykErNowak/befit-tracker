import dayjs from 'dayjs';
import { createContext, useContext, useState } from 'react';
import { getRangeOfDays } from '../utils/helpers';

type DateContextType = {
  days: dayjs.Dayjs[];
  selectedDate: string;
  setNewDays: (day: dayjs.Dayjs) => void;
  selectNewDate: (day: dayjs.Dayjs) => void;
};

const daysRange = 40;

const DateContext = createContext<DateContextType | null>(null);

function DateContextProvider({ children }: { children: React.ReactNode }) {
  const [days, setDays] = useState<dayjs.Dayjs[]>(() =>
    getRangeOfDays(daysRange)
  );
  const [selected, setSelected] = useState<DateContextType['selectedDate']>(
    () => dayjs().format('MM/DD/YYYY')
  );

  function setNewDays(day: dayjs.Dayjs) {
    setDays(getRangeOfDays(daysRange, day));
  }
  function selectNewDate(day: dayjs.Dayjs) {
    setSelected(day.format('MM/DD/YYYY'));
  }

  return (
    <DateContext.Provider
      value={{ days, selectedDate: selected, setNewDays, selectNewDate }}>
      {children}
    </DateContext.Provider>
  );
}

function useDateContext() {
  const context = useContext(DateContext);
  if (!context)
    throw new Error('useDateContext must be used with DateContextProvider');
  return context;
}

export { DateContextProvider, useDateContext };
