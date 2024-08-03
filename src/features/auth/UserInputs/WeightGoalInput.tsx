import { UseFormRegisterReturn } from 'react-hook-form';
import FormRow from '../../../ui/Form/FormRow';
import Input from '../../../ui/Form/Input';
import { forwardRef } from 'react';

type WeightGoalInputProps = {
  errorMessage?: string;
  inputRegister?: UseFormRegisterReturn<'weight.desired'>;
} & React.ComponentProps<'input'>;

const WeightGoalInput = forwardRef<HTMLInputElement, WeightGoalInputProps>(function ({ errorMessage, inputRegister, ...props }, ref) {
  return (
    <FormRow id="weightGoal" label="Body weight (goal)" error={errorMessage}>
      <Input min={1} type="number" id="weightGoal" ref={ref} {...props} {...inputRegister} />
    </FormRow>
  );
});

export default WeightGoalInput;
