import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import ButtonIcon from './Buttons/ButtonIcon';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { breakpoint } from '../styles/configStyles';
import { useDateContext } from '../contexts/DateContext';
import usePrefetchData from '../hooks/usePrefetchData';

const ScrollContainer = styled.div`
  display: grid;
  grid-auto-columns: 4rem;
  grid-auto-flow: column;
  gap: 0.5rem;

  overflow: hidden;
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-auto-columns: 5rem;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    grid-auto-columns: 6rem;
  }
`;

const StyledHorizontalCalendar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 75rem;
  margin: 0 auto 2rem;
  padding: 2rem 0;
  position: relative;

  @media screen and (min-width: ${breakpoint.laptop}) {
    margin: 0 auto;
  }
  @media screen and (min-width: ${breakpoint.desktop}) {
    max-width: 95rem;
  }

  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 6rem;
  }
  &::before {
    left: 3rem;
    background: linear-gradient(
      90deg,
      var(--color-brand-100) 30%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  &::after {
    right: 3rem;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      var(--color-brand-100) 70%
    );
  }
`;

const HorizontalCalendar = () => {
  const fetchDataForDate = usePrefetchData();
  const { days, selectedDate, selectNewDate, setNewDays } = useDateContext();

  const scrollableRef = useRef<null | HTMLDivElement>(null);

  const daysFormat = 'ddd';
  const currentDay = dayjs().format('MM/DD/YYYY');

  useEffect(() => {
    if (scrollableRef.current) {
      const element = document.querySelector(`[itemid='${selectedDate}']`);
      if (element)
        element.scrollIntoView({
          inline: 'center',
          block: 'center',
          behavior: 'instant',
        });
    }
  }, [scrollableRef.current?.clientWidth, selectedDate]);

  function onScroll(offset: number) {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }

  return (
    <StyledHorizontalCalendar>
      <ButtonIcon
        onClick={() => onScroll(-100)}
        aria-label="Show more older dates">
        <FaAnglesLeft />
      </ButtonIcon>
      <ScrollContainer ref={scrollableRef}>
        {days.map((day: dayjs.Dayjs) => {
          const dayID = day.format('MM/DD/YYYY');

          return (
            <DayCard
              day={day.format(daysFormat)}
              number={day.format('D')}
              selected={selectedDate === dayID}
              currentDay={currentDay === dayID}
              key={dayID}
              itemID={dayID}
              onClick={() => {
                setNewDays(day);
                selectNewDate(day);
              }}
              onMouseEnter={() => fetchDataForDate(dayID)}
            />
          );
        })}
      </ScrollContainer>
      <ButtonIcon
        onClick={() => onScroll(100)}
        aria-label="Show more recent dates">
        <FaAnglesRight />
      </ButtonIcon>
    </StyledHorizontalCalendar>
  );
};

export default HorizontalCalendar;

// Day Card Component

const StyledDayCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  user-select: none;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: none;

  p {
    font-weight: 500;
    font-size: 0.9em;
  }
  &.active {
    background-color: var(--color-brand-600);
    p,
    span {
      color: var(--color-brand-50);
    }
  }
  &.today {
    border: 2px solid var(--color-brand-600);
  }
`;

type DayCardProps = {
  day: string;
  number: string;
  selected: boolean;
  currentDay: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  itemID: string;
};

function DayCard({
  day,
  number,
  selected = false,
  currentDay = false,
  onClick,
  itemID,
  onMouseEnter,
}: DayCardProps) {
  return (
    <StyledDayCard
      itemID={itemID}
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={`${selected ? 'active' : ''}
      ${currentDay ? 'today' : ''}`}
      onMouseEnter={onMouseEnter}>
      <p>{day}</p>
      <span>{number}</span>
    </StyledDayCard>
  );
}
