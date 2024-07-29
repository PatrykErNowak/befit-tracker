import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';
import Button from '../../ui/Buttons/Button';
import FormRadioRow from '../../ui/Form/FormRadioRow';
import Radio from '../../ui/Form/Radio';
import Counter from '../../ui/Counter';

import { breakpoint } from '../../styles/configStyles';
import { getTodayDate } from '../../utils/helpers';
import { useSignUpSteps } from '../../contexts/SignUpContext';
import { useCollapse } from 'react-collapsed';
import { BsCaretDownFill } from 'react-icons/bs';
import RadioGroup from '../../ui/Buttons/RadioGroup';
import useUpdateUser from './useUpdateUser';
import BirthdayInput from './UserInputs/BirthdayInput';
import HeightInput from './UserInputs/HeightInput';
import GenderInput from './UserInputs/GenderInput';

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

export type SetUpProfileInputs = {
  gender: string;
  birthdate: string;
  height: {
    value: string;
    unit: 'cm' | 'in';
  };
  weight: {
    actual: string;
    desired: string;
    unit: 'kg' | 'lb';
    rateChange: string;
  };
  movementLvl: string;
  trainingLvl: string;
};

function SetUpProfileForm() {
  const { updateUser, isPending } = useUpdateUser();
  const { goToNextStep } = useSignUpSteps();
  const { getCollapseProps, getToggleProps } = useCollapse({ defaultExpanded: !isMobile });
  const { register, handleSubmit, formState, setValue, getValues, trigger } = useForm<SetUpProfileInputs>({
    defaultValues: {
      height: { unit: 'cm' },
      weight: {
        unit: 'kg',
      },
      movementLvl: '1',
      trainingLvl: '0',
    },
  });
  const { errors } = formState;
  const { name } = register('weight.rateChange');

  const isWeightEqual = getValues('weight.actual') === getValues('weight.desired');
  const weightUnit = getValues('weight.unit');

  const onSubmit: SubmitHandler<SetUpProfileInputs> = (userData) => {
    console.log(userData);
    updateUser({ ...userData }, { onSuccess: goToNextStep });
  };

  return (
    <FormExt onSubmit={handleSubmit(onSubmit)}>
      <div>
        <GenderInput
          errorMessage={errors.gender?.message}
          inputRegister={register('gender', { validate: (value) => value !== null || 'Gender is required' })}
          disabled={isPending}
        />

        <BirthdayInput
          errorMessage={errors.birthdate?.message}
          inputRegister={register('birthdate', { required: 'Birthdate is required', max: { message: 'Date must be in past', value: getTodayDate() } })}
          disabled={isPending}
        />

        <HeightInput
          errorMessage={errors.height?.value?.message}
          inputRegister={register('height.value', { required: 'Height is required' })}
          radioRegister={register('height.unit')}
          disabled={isPending}
        />

        <FormRow id="weightActual" label="Body weight (actual)" error={errors.weight?.actual?.message}>
          <Input type="number" id="weightActual" {...register('weight.actual', { required: 'Actual body weight is required' })} />
          <RadioGroup legend="Weight unit" buttons={['kg', 'lb']} {...register('weight.unit', { onChange: () => trigger('weight.unit') })} />
        </FormRow>

        <FormRow id="weightGoal" label="Body weight (goal)" error={errors.weight?.desired?.message}>
          <Input
            type="number"
            id="weightGoal"
            {...register('weight.desired', {
              required: 'Desired body weight is required',
              onChange: () => trigger(['weight.actual', 'weight.desired']),
            })}
          />
        </FormRow>

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
          <FormRadioRow label="Level of movement during the day (without training)">
            <Radio
              id="movVerylow"
              label="Very low"
              labelDesc="Sedentary work, light housework, walking only to the bus"
              value={0}
              {...register('movementLvl')}
            />
            <Radio
              id="movLow"
              label="Low"
              labelDesc="Sedentary or standing work with movement during the day, heavier housework"
              value={1}
              {...register('movementLvl')}
            />
            <Radio id="movAverage" label="Average" labelDesc="Physical work, a lot of movement during the day" value={2} {...register('movementLvl')} />
            <Radio
              id="movHigh"
              label="High"
              labelDesc="Many hours of hard physical work, very much movement during the day"
              value={3}
              {...register('movementLvl')}
            />
          </FormRadioRow>

          <FormRadioRow label="Level of training activity">
            <Radio id="trainVerylow" label="Very low" labelDesc="No training" value={0} {...register('trainingLvl')} />
            <Radio id="trainLow" label="Low" labelDesc="Trainings 1-3 days a week" value={1} {...register('trainingLvl')} />
            <Radio id="trainAverage" label="Average" labelDesc="Trainings 4-5 days a week" value={2} {...register('trainingLvl')} />
            <Radio id="trainHigh" label="High" labelDesc="Daily training" value={3} {...register('trainingLvl')} />
          </FormRadioRow>
        </div>
      </AdditionalForm>
      <FormButtonsRow>
        <Button disabled={isPending}>Submit</Button>
      </FormButtonsRow>
    </FormExt>
  );
}

export default SetUpProfileForm;
