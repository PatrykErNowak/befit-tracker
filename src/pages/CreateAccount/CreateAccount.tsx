import styled from 'styled-components';

import { breakpoint } from '../../styles/configStyles';

import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Stepper from '../../ui/Stepper';
import CreateAccountFinishScreen from './CreateAccountFinishScreen';
import SetUpProfileForm from '../../features/auth/SetUpProfileForm';
import CreateAccontStartScreen from './CreateAccontStartScreen';

import { useSignUpSteps } from '../../contexts/SignUpContext';

const StyledCreateAccount = styled(Container)`
  gap: 2rem;
  width: min(100% - 4rem, 90rem);
  padding: 2rem 0 4rem;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoint.laptop}) {
    min-height: 100dvh;
  }
`;

const PageHeading = styled(Heading)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    text-align: center;
  }
`;

const steps = ['Create Account', 'Set Up Profile', 'Log in!'];

function CreateAccount() {
  const { step } = useSignUpSteps();

  return (
    <StyledCreateAccount>
      <PageHeading as="h1">Signup</PageHeading>
      <Stepper steps={steps} activeStep={step} />

      {step === 0 && <CreateAccontStartScreen />}
      {step === 1 && <SetUpProfileForm />}
      {step === 2 && <CreateAccountFinishScreen />}
    </StyledCreateAccount>
  );
}

export default CreateAccount;
