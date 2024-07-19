import styled from 'styled-components';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import SignupForm from '../features/auth/SignUpForm';

import { BsFillPersonCheckFill } from 'react-icons/bs';
import { useState } from 'react';
import { breakpoint } from '../styles/configStyles';
import StepperExt from '../ui/Stepper';
import Text from '../ui/Text';
import ContainerWithBg from '../ui/ContainerWithBg';
import SetUpProfileForm from '../features/auth/SetUpProfileForm';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { Link } from 'react-router-dom';
import LinkCustom from '../ui/LinkCustom';

const StyledCreateAccount = styled(Container)`
  gap: 2rem;
  width: min(100% - 4rem, 80rem);
  padding: 2rem 0 4rem;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoint.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding-top: 14rem;
  }
`;

const PageHeading = styled(Heading)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/-1;
    text-align: center;
  }
`;

const Stepper = styled(StepperExt)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/-1;
  }
`;

const InfoContainer = styled(ContainerWithBg)`
  text-align: center;
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/2;
  }
`;
const FormsContainer = styled(Container)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 2/3;
  }
`;

const FinishScreenContainer = styled(Container)`
  gap: 1rem;
  padding: 3rem 0;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  button,
  a {
    margin-top: 2rem;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 1/-1;
  }
`;

const infoHeading = {
  '0': {
    title: 'Come join us!',
    desc: "We are so excited to have you here. If you haven't already, create an account to get access to store and track your lifestyle data.",
  },
  '1': { title: 'Set Up Your profile!', desc: 'One more step ahead of you. Set up your profile to correctly track your progress and statistics.' },
};

function CreateAccount() {
  const [activeStep, setActiveStep] = useState<0 | 1 | 2>(1);

  return (
    <StyledCreateAccount>
      <PageHeading as="h1">Signup</PageHeading>
      <Stepper steps={[{ title: 'Create Account' }, { title: 'Set Up Profile' }, { title: 'Log in!' }]} activeStep={activeStep} />
      {activeStep !== 2 && (
        <InfoContainer>
          <Heading as="h2">{infoHeading[activeStep].title}</Heading>
          <Text>{infoHeading[activeStep].desc}</Text>
          {activeStep === 0 && (
            <Text>
              Already have an account? <LinkCustom to="/app/login">Log in &rarr;</LinkCustom>
            </Text>
          )}
        </InfoContainer>
      )}
      {activeStep !== 2 && (
        <FormsContainer>
          {activeStep === 0 && <SignupForm />}
          {activeStep === 1 && <SetUpProfileForm />}
        </FormsContainer>
      )}
      {activeStep === 2 && (
        <FinishScreenContainer>
          <Heading as="h2">Congratulations!</Heading>
          <Icon>
            <BsFillPersonCheckFill />
          </Icon>
          <Text>Your account has been successfuly created.</Text>
          <Text>Before log in, please check your registered email for email verification.</Text>
          <Button as={Link} to={'/app/login'}>
            Go to login page
          </Button>
        </FinishScreenContainer>
      )}
    </StyledCreateAccount>
  );
}

export default CreateAccount;
