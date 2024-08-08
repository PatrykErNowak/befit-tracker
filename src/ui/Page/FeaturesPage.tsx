import styled from 'styled-components';

import { TbTargetArrow } from 'react-icons/tb';
import { FaHeartbeat, FaRegChartBar } from 'react-icons/fa';

import { breakpoint } from '../../styles/configStyles';

const StyledFeaturesPage = styled.section`
  display: grid;
  gap: 3rem;
  margin: 5rem 0;

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 10rem 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

function FeaturesPage() {
  return (
    <StyledFeaturesPage>
      <FeatureItem
        icon={<FaHeartbeat />}
        iconColor="#da765e"
        title="Log meals, exercise and health metrics"
        text="Plus, you can create custom foods, recipes, exercises and metrics."
      />
      <FeatureItem
        icon={<TbTargetArrow />}
        iconColor="#88c057"
        title="Set realistics goals"
        text="Set any goals which you see deem fit and start working towards it."
      />
      <FeatureItem
        icon={<FaRegChartBar />}
        iconColor="#4377c3"
        title="Get valuable health reports and charts"
        text="Learn how nutrients and metrics correlate over time."
      />
    </StyledFeaturesPage>
  );
}

export default FeaturesPage;

const StyledFeatureItem = styled.div<{ $iconColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;

  svg {
    font-size: 4em;
    color: ${({ $iconColor = 'inherit' }) => $iconColor};
  }
  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 70%;
    font-size: 1.5em;
    color: var(--color-grey-600);
  }

  p {
    width: 70%;
    color: var(--color-grey-400);
    font-weight: 500;
  }
`;

type FeatureItemProps = {
  icon: React.ReactElement;
  iconColor?: string;
  title: string;
  text: string;
};

function FeatureItem({ icon, iconColor, title, text }: FeatureItemProps) {
  return (
    <StyledFeatureItem $iconColor={iconColor}>
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledFeatureItem>
  );
}
