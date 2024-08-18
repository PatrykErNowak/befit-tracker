import styled from 'styled-components';
import ComponentAppWrapper from '../../ui/ComponentAppWrapper';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import { breakpoint } from '../../styles/configStyles';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';
import Button from '../../ui/Buttons/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Dish } from './Diet.types';
import useAddDish from './useAddDish';
import useMealName from './useMealName';

const MultiRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: 1rem;
  grid-template-rows: 1fr;

  @media screen and (min-width: ${breakpoint.laptop}) {
    gap: 2rem;
  }
`;

type AddCustomMealInputs = Dish;

function AddCustomMealForm({ ...props }) {
  const mealName = useMealName()!;
  const { addMeal, isPending } = useAddDish();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddCustomMealInputs>();

  const onSubmit: SubmitHandler<AddCustomMealInputs> = (data) => {
    addMeal({ name: mealName, data }, { onSuccess: () => reset() });
  };

  return (
    <ComponentAppWrapper {...props}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Title" id="name" error={errors.name?.message}>
          <Input
            type="text"
            id="name"
            disabled={isPending}
            placeholder="Pizza"
            {...register('name', { required: 'Title is required' })}
          />
        </FormRow>
        <FormRow label="Description" id="desc">
          <Input
            type="text"
            id="desc"
            disabled={isPending}
            {...register('desc')}
          />
        </FormRow>
        <MultiRow>
          <FormRow
            label="Calories"
            id="kcal"
            unitLabel="kcal"
            error={errors.kcal?.message}>
            <Input
              type="number"
              id="kcal"
              disabled={isPending}
              placeholder="0"
              {...register('kcal', { required: 'Calories is required' })}
            />
          </FormRow>
          <FormRow
            label="Weight"
            id="weight"
            unitLabel="g"
            error={errors.weight?.message}>
            <Input
              type="number"
              id="weight"
              disabled={isPending}
              placeholder="0"
              {...register('weight', {
                required: 'Weight is required',
                min: { value: 1, message: 'Weight must be greater than 0' },
              })}
            />
          </FormRow>
        </MultiRow>
        <MultiRow>
          <FormRow label="Protein" id="protein" unitLabel="g">
            <Input
              type="number"
              id="protein"
              disabled={isPending}
              placeholder="0"
              {...register('protein', { required: 'Calories is required' })}
            />
          </FormRow>
          <FormRow label="Carbs" id="carbs" unitLabel="g">
            <Input
              type="number"
              id="carbs"
              disabled={isPending}
              placeholder="0"
              {...register('carbs', { required: 'Calories is required' })}
            />
          </FormRow>
          <FormRow label="Fat" id="fat" unitLabel="g">
            <Input
              type="number"
              id="fat"
              disabled={isPending}
              placeholder="0"
              {...register('fat', { required: 'Calories is required' })}
            />
          </FormRow>
        </MultiRow>
        <FormButtonsRow>
          <Button disabled={isPending}>Add</Button>
        </FormButtonsRow>
      </Form>
    </ComponentAppWrapper>
  );
}

export default AddCustomMealForm;
