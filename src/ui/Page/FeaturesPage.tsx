import { IoIosPulse } from 'react-icons/io';
import { MdDirectionsBike } from 'react-icons/md';
import { TbTargetArrow } from 'react-icons/tb';
import styled from 'styled-components';
import { breakpoint } from '../../styles/configStyles';

const StyledFeaturesPage = styled.section`
  display: grid;
  gap: 3rem;
  padding: 5rem 0;

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding: 10rem 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

function FeaturesPage() {
  return (
    <StyledFeaturesPage>
      <FeatureItem
        icon={<MdDirectionsBike />}
        iconColor="#da765e"
        title="Learn, track and record"
        text="See all the details, track and analyse them in aby way."
      />
      <FeatureItem
        icon={<TbTargetArrow />}
        iconColor="#88c057"
        title="Set realistics goals"
        text="Set any goals which you see deem fit and start working towards it."
      />
      <FeatureItem
        icon={<IoIosPulse />}
        iconColor="#4377c3"
        title="Stay active and fit"
        text="See all the details, track and analyse them in aby way."
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
