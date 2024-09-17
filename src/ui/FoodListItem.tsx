import styled from 'styled-components';
import Text from './Text';

const StyledInstantFoodItem = styled.li`
  display: grid;
  grid-template-columns: 25fr 75fr;
  grid-template-rows: minmax(100%, 8rem);
  gap: 2rem;
  padding: 0.5rem 1rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;

  &:hover,
  &:focus {
    box-shadow: var(--shadow-md);
    background-color: var(--color-brand-200);
  }

  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: auto;
      max-height: 100%;
      object-fit: contain;
      object-position: center;
      filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.1));
      border-radius: 5px;
    }
  }

  .content-box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-self: center;
  }

  .title {
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 1px;
    color: var(--color-brand-700);
    font-size: 1.2em;
  }

  .nutrition {
    display: flex;
    gap: 1rem;
    font-size: 0.9em;

    .unit {
      text-transform: capitalize;
    }

    .kcal {
      margin-left: auto;
    }
  }
`;

type InstantFoodItemProps = {
  img: string;
  name: string;
  quantityNumb: number;
  quantityUnit: string;
  kcal: number | null;
} & React.ComponentProps<'li'>;

export default function InstantFoodItem({
  img,
  name,
  quantityNumb,
  quantityUnit,
  kcal = null,
  ...props
}: InstantFoodItemProps) {
  return (
    <StyledInstantFoodItem tabIndex={1} {...props}>
      <div className="img-box">
        <img src={img} alt="" />
      </div>
      <div className="content-box">
        <p className="title">{name}</p>
        <div className="nutrition">
          <Text $grey>
            {quantityNumb % 1 === 0
              ? quantityNumb
              : quantityNumb.toPrecision(2)}
          </Text>
          <Text $grey className="unit">
            {quantityUnit}
          </Text>

          {kcal && (
            <Text $grey $bold={500} className="kcal">
              {kcal} kcal
            </Text>
          )}
        </div>
      </div>
    </StyledInstantFoodItem>
  );
}
