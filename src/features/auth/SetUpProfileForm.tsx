import { SubmitHandler, useForm } from 'react-hook-form';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';
import Button from '../../ui/Button';
import FormRadioRow from '../../ui/Form/FormRadioRow';
import Radio from '../../ui/Form/Radio';

type Inputs = {
  gender: string;
  birthdate: string;
  height: string;
  weightActual: string;
  weightGoal: string;
};

function SetUpProfileForm() {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<Inputs> = () => {
    console.log('submit');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRadioRow label="Gender" error={errors.gender?.message}>
        <Radio id="female" label="Female" value="female" {...register('gender', { required: 'This field is required' })} />
        <Radio id="male" label="Male" value="male" {...register('gender', { required: 'This field is required' })} />
      </FormRadioRow>
      <FormRow label="Birthdate" error={errors.birthdate?.message}>
        <Input type="date" id="birthdate" {...register('birthdate', { required: 'This field is required' })} />
      </FormRow>
      <FormRow label="Height" error={errors.height?.message}>
        <Input type="number" id="height" {...register('height', { required: 'This field is required' })} />
      </FormRow>
      <FormRow label="Body weight (actual)" error={errors.weightActual?.message}>
        <Input type="number" id="weightActual" {...register('weightActual', { required: 'This field is required' })} />
      </FormRow>
      <FormRow label="Body weight (goal)" error={errors.weightGoal?.message}>
        <Input type="number" id="weightGoal" {...register('weightGoal', { required: 'This field is required' })} />
      </FormRow>
      <FormButtonsRow>
        <Button>Submit</Button>
      </FormButtonsRow>
    </Form>
  );
}

export default SetUpProfileForm;
