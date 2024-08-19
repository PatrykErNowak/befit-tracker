import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import ButtonIcon from './Buttons/ButtonIcon';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { getRangeOfDays } from '../utils/helpers';
import { breakpoint } from '../styles/configStyles';

const ScrollContainer = styled.div`
  display: grid;
  grid-auto-columns: 4rem;
  grid-auto-flow: column;
  gap: 0.5rem;
  padding: 2rem 0;
  overflow: hidden;
`;

const StyledHorizontalCalendar = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  max-width: 75rem;
  margin: 0 auto 2rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 3px;
    background-color: var(--color-brand-200);
    border-radius: 500px;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    &::before {
      display: none;
    }
  }
`;

type Select = string | number | undefined;

const HorizontalCalendar = () => {
  const daysRange = 40;

  const [days, setDays] = useState<dayjs.Dayjs[]>(() =>
    getRangeOfDays(daysRange)
  );
  const [selected, setSelected] = useState<Select>(() =>
    dayjs().format('MM/DD/YYYY')
  );
  const scrollableRef = useRef<null | HTMLDivElement>(null);

  const daysFormat = 'ddd';
  const currentDay = dayjs().format('MM/DD/YYYY');

  useEffect(() => {
    if (scrollableRef.current) {
      const element = document.querySelector(`[itemid='${selected}']`);
      if (element) element.scrollIntoView({ inline: 'center' });
    }
  }, [scrollableRef.current?.clientWidth, selected]);

  function onScroll(offset: number) {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }

  return (
    <StyledHorizontalCalendar>
      <ButtonIcon onClick={() => onScroll(-100)}>
        <FaAnglesLeft />
      </ButtonIcon>
      <ScrollContainer ref={scrollableRef}>
        {days.map((day: dayjs.Dayjs) => {
          const dayID = day.format('MM/DD/YYYY');

          return (
            <DayCard
              day={day.format(daysFormat)}
              number={day.format('D')}
              selected={selected === dayID}
              currentDay={currentDay === dayID}
              key={dayID}
              itemID={dayID}
              onClick={() => {
                setDays(() => getRangeOfDays(daysRange, day));
                setSelected(dayID);
              }}
            />
          );
        })}
      </ScrollContainer>
      <ButtonIcon onClick={() => onScroll(100)}>
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

  &.active {
    background-color: var(--color-brand-600);
    h5,
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
  itemID: string;
};

function DayCard({
  day,
  number,
  selected = false,
  currentDay = false,
  onClick,
  itemID,
}: DayCardProps) {
  return (
    <StyledDayCard
      itemID={itemID}
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={`${selected ? 'active' : ''}
      ${currentDay ? 'today' : ''}`}>
      <h5>{day}</h5>
      <span>{number}</span>
    </StyledDayCard>
  );
}
