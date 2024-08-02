import { FaCheck } from 'react-icons/fa';
import styled, { css } from 'styled-components';

// Helpers

type Status = 'idle' | 'active' | 'completed';

const getColorStyles = (status: Status) => {
  if (status === 'idle')
    return css`
      background-color: var(--color-grey-400);

      & > p {
        color: red;
      }
    `;
  if (status === 'active')
    return css`
      background-color: var(--color-brand-600);
    `;
  if (status === 'completed')
    return css`
      background-color: var(--color-brand-400);
    `;
};

const getStatus = (activeStep: number, step: number): Status => {
  if (activeStep === step) return 'active';
  if (activeStep > step) return 'completed';
  return 'idle';
};

// ----------------------------------------------------------------
// Main Component

const StyledStepper = styled.div`
  display: grid;
  gap: 2rem;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
  margin-bottom: 1rem;
`;

type StepperProps = {
  steps: string[];
  activeStep: number;
};

export default function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <StyledStepper>
      {steps.map((step, i) => (
        <Step key={i} number={i + 1} label={step} status={getStatus(activeStep, i)} />
      ))}
    </StyledStepper>
  );
}

// ----------------------------------------------------------------
// Children Components

const StyledStep = styled.div<{ $status: Status }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  position: relative;
  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 1.5rem;
    right: 50%;
    width: calc(100% + 2rem);
    height: 2px;
    z-index: -1;

    ${({ $status = 'idle' }) => getColorStyles($status)}
  }
`;

const StepIcon = styled.div<{ $status: Status }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  color: var(--color-brand-50);
  border-radius: 50%;

  ${({ $status = 'idle' }) => getColorStyles($status)}
`;

const StepLabel = styled.p<{ $status: Status }>`
  font-weight: 500;
  text-align: center;

  ${({ $status = 'idle' }) => {
    if ($status === 'idle')
      return css`
        opacity: 0.8;
      `;
    if ($status === 'active')
      return css`
        font-weight: 600;
        color: var(--color-brand-600);
      `;
    if ($status === 'completed')
      return css`
        color: var(--color-brand-500);
      `;
  }}
`;

type StepProps = {
  label: string;
  number: number;
  status: Status;
};

function Step({ number, label, status = 'idle' }: StepProps) {
  return (
    <StyledStep $status={status}>
      <StepIcon $status={status}>{status === 'completed' ? <FaCheck /> : number}</StepIcon>
      <StepLabel $status={status}>{label}</StepLabel>
    </StyledStep>
  );
}
