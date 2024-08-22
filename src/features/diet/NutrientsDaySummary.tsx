import styled from 'styled-components';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import Text from '../../ui/Text';
import { FcFlashOn } from 'react-icons/fc';
import useDiet from './useDiet';
import { sumMealsNutrients } from '../../utils/helpers';
import { breakpoint } from '../../styles/configStyles';
import useUserDietNutrients from './useUserDietNutrients';

const StyledNutrientsDaySummary = styled(ComponentAppWrapper)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;
  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 3rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;

  &::before,
  &::after {
    z-index: 10;
    position: absolute;
    top: 0;
    right: 20%;
  }
  &::before {
    content: '';
    z-index: 10;
    transform: translateX(50%);
    height: 100%;
    width: 5px;
    border-right: 3px dashed var(--color-grey-400);
  }
  &::after {
    content: 'Target';
    transform: translate(50%, -100%);
    padding-bottom: 0.3rem;
    color: var(--color-grey-500);
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const Footer = styled.div<{
  $progress: number;
}>`
  z-index: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 1rem 1.5rem;
  margin-top: 1rem;
  color: var(--color-grey-500);
  background-color: var(--color-brand-100);
  border-radius: 15px;

  .divider {
    /* font-size: 1.2em; */
    display: inline-block;
    transform: scale(1.5);
    font-weight: 700;
    color: var(--color-grey-400);
  }

  .energy-score {
    font-size: 2rem;
    color: var(--color-grey-500);
    display: flex;
    align-items: center;
    padding: 1rem 1rem 1rem 2rem;
    background-color: var(--color-brand-50);
    border-radius: 10px;

    & svg {
      font-size: 3.5rem;
    }
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $progress }) => $progress || 0}%;
    background-color: #ffe2a2;
    opacity: 1;
    clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
  }
`;

function NutrientsDaySummary({ ...props }) {
  const { diet } = useDiet();
  const nutrients = sumMealsNutrients(diet);
  const nutrientsDemands = useUserDietNutrients();

  if (!nutrientsDemands) return null; // return information "Please set up your profile  for better experience and used all available features"

  const { kcalDemand, carbsTarget, fatTarget, proteinTarget } =
    nutrientsDemands;

  const kcalInPercentage = (
    (Number(nutrients.kcal) / kcalDemand) *
    100
  ).toFixed(2);

  return (
    <StyledNutrientsDaySummary {...props}>
      <Text $grey $bold={600}>
        Macros per Day
      </Text>
      <ContentContainer>
        <Item
          title="Protein"
          currValue={Number(nutrients.protein)}
          maxValue={proteinTarget}
          colors={{
            barColor: '#f98093',
            labelStartColor: '#c85ea0',
            labelEndColor: '#ec7696',
          }}
        />
        <Item
          title="Carbs"
          currValue={Number(nutrients.carbs)}
          maxValue={carbsTarget}
          colors={{
            barColor: '#86f6f7',
            labelStartColor: '#14ddd7',
            labelEndColor: '#1be3b2',
          }}
        />
        <Item
          title="Fat"
          currValue={Number(nutrients.fat)}
          maxValue={fatTarget}
          colors={{
            barColor: '#f1b638',
            labelStartColor: '#f6b46a',
            labelEndColor: '#faba4e',
          }}
        />
      </ContentContainer>
      <Footer $progress={Number(kcalInPercentage)}>
        <div>
          <Text $grey $bold={600}>
            Total Energy
          </Text>
          <Text $bold={500}>
            {nutrients.kcal} <span className="divider">/</span> {kcalDemand}{' '}
            calories
          </Text>
        </div>
        <div className="energy-score">
          <Text $bold={700}>{kcalInPercentage}%</Text>
          <FcFlashOn />
        </div>
      </Footer>
    </StyledNutrientsDaySummary>
  );
}

export default NutrientsDaySummary;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5em;
  color: var(--color-grey-700);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 1.5rem;
  background-color: var(--color-brand-100);
  border-radius: 500px;
`;

const InnerProgessBar = styled.div<{
  $progress: number;
  $color: string;
}>`
  position: relative;
  width: ${({ $progress = 0 }) => $progress}%;
  height: 100%;
  background-color: ${({ $color }) => $color || 'var(--color-brand-500)'};
  border-radius: 500px;
`;

const Label = styled.div<{
  $startColor: string;
  $endColor: string;
}>`
  z-index: 20;
  position: absolute;
  top: 50%;
  right: 0;
  display: inline-block;
  padding: 0.7rem 1.2rem;
  transform: translate(50%, -50%);
  color: var(--color-brand-50);
  background: linear-gradient(90deg, #14ddd7 0%, #1be3b2 100%);
  background: linear-gradient(
    100deg,
    ${({ $startColor }) => $startColor} 0%,
    ${({ $endColor }) => $endColor} 100%
  );
  border-radius: 10px;
`;

type ItemProps = {
  title: string;
  maxValue: number;
  currValue: number;
  colors: {
    barColor: string;
    labelStartColor: string;
    labelEndColor: string;
  };
};

function Item({
  title,
  currValue = 0,
  maxValue = 1,
  colors: { barColor, labelEndColor, labelStartColor },
}: ItemProps) {
  const checkIsOverTarger =
    ((currValue * 0.96) / (maxValue * 1.3)) * 100 > 100
      ? 100
      : ((currValue * 0.96) / (maxValue * 1.2)) * 100;

  return (
    <StyledItem>
      <Header>
        <Text $bold={500} id={`${title}-progress`}>
          {title}
        </Text>
        <Text $bold={500} $opacity={0.6}>
          gram
        </Text>
      </Header>
      <ProgressBar>
        <InnerProgessBar
          role="progressbar"
          $color={barColor}
          $progress={checkIsOverTarger}
          aria-labelledby={`${title}-progress`}
          aria-valuemax={maxValue}
          aria-valuenow={currValue}>
          {currValue > 0 && (
            <Label $startColor={labelStartColor} $endColor={labelEndColor}>
              {currValue}
            </Label>
          )}
        </InnerProgessBar>
      </ProgressBar>
    </StyledItem>
  );
}
