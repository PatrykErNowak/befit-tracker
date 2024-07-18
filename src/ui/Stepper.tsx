import Stepper from 'react-stepper-horizontal';
import Container from './Container';
import styled from 'styled-components';

const ExtContainer = styled(Container)`
  a {
    text-decoration: none;
  }
`;

function StepperExt(props) {
  return (
    <ExtContainer className={props.className}>
      <Stepper
        {...props}
        circleTop={0}
        activeColor="#06b6d4"
        completeColor="#a8cf45"
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
