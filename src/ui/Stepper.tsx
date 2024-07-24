import Stepper from 'react-stepper-horizontal';
import Container from './Container';
import styled from 'styled-components';

const ExtContainer = styled(Container)`
  a {
    text-decoration: none;
  }
`;

function StepperExt(props: typeof Stepper) {
  return (
    <ExtContainer className={props.className}>
      <Stepper
        {...props}
        circleTop={0}
        activeColor="#6366f1"
        completeColor="#a5b4fc"
        defaultColor={'#d1d5db'}
        size={34}
        circleFontSize={14}
        titleFontSize={14}
        defaultTitleOpacity="0.7"
        completeTitleOpacity="0.7"
      />
    </ExtContainer>
  );
}

export default StepperExt;
