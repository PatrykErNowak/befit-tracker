import styled from 'styled-components';
import Form from '../../ui/Form/Form';
import { breakpoint } from '../../styles/configStyles';
import { UserMetaData } from '../../services/types';
import useUser from './useUser';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import WeightActualInput from './UserInputs/WeightActualInput';
import WeightGoalInput from './UserInputs/WeightGoalInput';
import FormRow from '../../ui/Form/FormRow';
import Counter from '../../ui/Counter';
import { SubmitHandler, useForm } from 'react-hook-form';
import MovementLvlInput from './UserInputs/MovementLvlInput';
import TrainingLvlInput from './UserInputs/TrainingLvlInput';
import { SetUpProfileInputs } from './SetUpProfileForm';
import useUpdateUser from './useUpdateUser';
import Button from '../../ui/Buttons/Button';
import { useEffect } from 'react';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;

  position: relative;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-grey-200);
  }
`;

const BreakLine = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: 2px;
  background-color: var(--color-grey-200);
`;
const BreakLineExt = styled(BreakLine)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    display: none;
  }
`;

const FormExt = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`;

type UpdateUserGoalsForm = {
  movementLvl: SetUpProfileInputs['movementLvl'];
  trainingLvl: SetUpProfileInputs['trainingLvl'];
  weight: SetUpProfileInputs['weight'];
};

function UpdateUserGoalsForm() {
  const { updateUser, isPending } = useUpdateUser();
  const { user } = useUser();
  const { movementLvl, trainingLvl, weight } = user?.user_metadata as UserMetaData;
  const { handleSubmit, register, getValues, formState, setValue, trigger } = useForm({
    defaultValues: {
      movementLvl,
      trainingLvl,
      weight,
    },
  });
  const { errors } = formState;

  useEffect(() => {
    register('weight.rateChange');
  }, [register]);

  const isWeightEqual = getValues('weight.actual') === getValues('weight.desired');
  const weightUnit = getValues('weight.unit');

  const onSubmit: SubmitHandler<UpdateUserGoalsForm> = (userData) => {
    updateUser({ ...userData });
  };

  return (
    <>
      <Header>
        <div>
          <Heading as="h2" $opacity={1}>
            Weight Goals
          </Heading>
          <Text $opacity={0.8}>You can change your weight goals here.</Text>
        </div>
        <Button onClick={handleSubmit(onSubmit)} disabled={isPending}>
          Update
        </Button>
      </Header>
      <FormExt>
        <div>
          <WeightActualInput
            errorMessage={errors.weight?.actual?.message}
            inputRegister={register('weight.actual', { required: 'Actual body weight is required' })}
            radioRegister={register('weight.unit', { onChange: () => trigger('weight.unit') })}
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

          <BreakLine />

          <FormRow label="Rate of weight change per week">
            <Counter
              step={0.25}
              unit={weightUnit}
              minCounter={0}
              reset={isWeightEqual}
              initValue={Number(weight.rateChange)}
              onChangeCounter={(value) => setValue('weight.rateChange', String(value))}
              disabled={isWeightEqual}
            />
          </FormRow>
          <BreakLineExt />
        </div>
        <div>
          <MovementLvlInput inputRegister={register('movementLvl')} />
          <BreakLine />
          <TrainingLvlInput inputRegister={register('trainingLvl')} />
        </div>
      </FormExt>
    </>
  );
}

export default UpdateUserGoalsForm;
