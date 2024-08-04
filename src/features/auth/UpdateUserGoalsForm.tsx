import styled from 'styled-components';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { UserMetaData, UserPhysicsData } from '../../services/types';
import { breakpoint } from '../../styles/configStyles';

import useUser from './useUser';
import useUpdateUser from './useUpdateUser';

import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import WeightActualInput from './UserInputs/WeightActualInput';
import WeightGoalInput from './UserInputs/WeightGoalInput';
import MovementLvlInput from './UserInputs/MovementLvlInput';
import TrainingLvlInput from './UserInputs/TrainingLvlInput';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Counter from '../../ui/Counter';
import Button from '../../ui/Buttons/Button';
import BreakLine from '../../ui/BreakLine';
import HeaderApp from '../../ui/HeaderAppSection';

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
  movementLvl: UserPhysicsData['movementLvl'];
  trainingLvl: UserPhysicsData['trainingLvl'];
  weight: UserPhysicsData['weight'];
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
    updateUser({ ...userData }, { onSuccess: () => toast.success('Goals data successfuly updated!') });
  };

  return (
    <>
      <HeaderApp>
        <div>
          <Heading as="h2" $opacity={1}>
            Weight Goals
          </Heading>
          <Text $opacity={0.8}>You can change your weight goals here.</Text>
        </div>
        <Button onClick={handleSubmit(onSubmit)} disabled={isPending}>
          Update
        </Button>
      </HeaderApp>
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
              initValue={Number(weight?.rateChange)}
              onChangeCounter={(value) => setValue('weight.rateChange', String(value))}
              disabled={isWeightEqual || isPending}
            />
          </FormRow>
          <BreakLineExt />
        </div>
        <div>
          <MovementLvlInput inputRegister={register('movementLvl')} disabled={isPending} />
          <BreakLine />
          <TrainingLvlInput inputRegister={register('trainingLvl')} disabled={isPending} />
        </div>
      </FormExt>
    </>
  );
}

export default UpdateUserGoalsForm;
