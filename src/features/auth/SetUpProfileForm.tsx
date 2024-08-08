import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';
import Button from '../../ui/Buttons/Button';
import Counter from '../../ui/Counter';

import { breakpoint } from '../../styles/configStyles';
import { getTodayDate } from '../../utils/helpers';
import { useSignUpSteps } from '../../contexts/SignUpContext';
import { useCollapse } from 'react-collapsed';
import { BsCaretDownFill } from 'react-icons/bs';
import useUpdateUser from './useUpdateUser';
import BirthdayInput from './UserInputs/BirthdayInput';
import HeightInput from './UserInputs/HeightInput';
import GenderInput from './UserInputs/GenderInput';
import WeightActualInput from './UserInputs/WeightActualInput';
import WeightGoalInput from './UserInputs/WeightGoalInput';
import MovementLvlInput from './UserInputs/MovementLvlInput';
import TrainingLvlInput from './UserInputs/TrainingLvlInput';
import { UserPhysicsData } from '../../services/types';
import { useEffect } from 'react';
import { useLogout } from './useLogout';

const FormExt = styled(Form)`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 0;
  }
`;

const AdditionalForm = styled.div`
  position: relative;

  > div {
    margin-top: 2rem;
  }

  @media screen and (min-width: ${breakpoint.laptop}) {
    padding-left: 2rem;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-color: var(--color-brand-600);
      opacity: 0.4;
    }
  }
`;

const AdvancedOptionsButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 1.2em;
  color: var(--color-brand-700);
  background-color: transparent;
  border: 1px solid transparent;
  svg {
    height: 1.2em;
    width: 1.2em;
  }
`;

export type SetUpProfileInputs = UserPhysicsData;

function SetUpProfileForm() {
  const { updateUser, isPending } = useUpdateUser();
  const { logout } = useLogout({ redirect: false });
  const { goToNextStep } = useSignUpSteps();
  const { getCollapseProps, getToggleProps } = useCollapse({
    defaultExpanded: !isMobile,
  });
  const { register, handleSubmit, formState, setValue, getValues, trigger } =
    useForm<SetUpProfileInputs>({
      defaultValues: {
        height: { unit: 'cm' },
        weight: {
          unit: 'kg',
        },
        movementLvl: '1',
        trainingLvl: '0',
      },
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { errors } = formState;
  const { name } = register('weight.rateChange');

  const isWeightEqual =
    getValues('weight.actual') === getValues('weight.desired');
  const weightUnit = getValues('weight.unit');

  const onSubmit: SubmitHandler<SetUpProfileInputs> = (userData) => {
    updateUser(
      { ...userData },
      {
        onSuccess: () => {
          goToNextStep();
          logout();
        },
      }
    );
  };

  return (
    <FormExt onSubmit={handleSubmit(onSubmit)}>
      <div>
        <GenderInput
          errorMessage={errors.gender?.message}
          inputRegister={register('gender', {
            validate: (value) => value !== null || 'Gender is required',
          })}
          disabled={isPending}
        />

        <BirthdayInput
          errorMessage={errors.birthdate?.message}
          inputRegister={register('birthdate', {
            required: 'Birthdate is required',
            max: { message: 'Date must be in past', value: getTodayDate() },
          })}
          disabled={isPending}
        />

        <HeightInput
          errorMessage={errors.height?.value?.message}
          inputRegister={register('height.value', {
            required: 'Height is required',
          })}
          radioRegister={register('height.unit')}
          disabled={isPending}
        />

        <WeightActualInput
          errorMessage={errors.weight?.actual?.message}
          inputRegister={register('weight.actual', {
            required: 'Actual body weight is required',
          })}
          radioRegister={register('weight.unit', {
            onChange: () => trigger('weight.unit'),
          })}
          disabled={isPending}
        />

        <WeightGoalInput
          errorMessage={errors.weight?.desired?.message}
          inputRegister={register('weight.desired', {
            required: 'Desired body weight is required',
            onChange: () => trigger(['weight.actual', 'weight.desired']),
          })}
          disabled={isPending}
        />

        <FormRow label="Rate of weight change per week">
          <Counter
            step={0.25}
            unit={weightUnit}
            minCounter={0}
            reset={isWeightEqual}
            onChangeCounter={(value) => setValue(name, String(value))}
            disabled={isWeightEqual}
          />
        </FormRow>
      </div>

      <AdditionalForm>
        <AdvancedOptionsButton {...getToggleProps()}>
          Advanced Options <BsCaretDownFill />
        </AdvancedOptionsButton>

        <div {...getCollapseProps()}>
          <MovementLvlInput inputRegister={register('movementLvl')} />
          <TrainingLvlInput inputRegister={register('trainingLvl')} />
        </div>
      </AdditionalForm>

      <FormButtonsRow>
        <Button disabled={isPending}>Submit</Button>
      </FormButtonsRow>
    </FormExt>
  );
}

export default SetUpProfileForm;
