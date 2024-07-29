import { forwardRef } from 'react';
import FormRow from '../../../ui/Form/FormRow';
import Input from '../../../ui/Form/Input';
import { UseFormRegisterReturn } from 'react-hook-form';

type BirthdayInputProps = {
  errorMessage?: string;
  inputRegister?: UseFormRegisterReturn<'birthdate'>;
} & React.ComponentProps<'input'>;

const BirthdayInput = forwardRef<HTMLInputElement, BirthdayInputProps>(function ({ errorMessage, inputRegister, ...props }, ref) {
  return (
    <FormRow id="birthdate" label="Birthdate" error={errorMessage}>
      <Input type="date" id="birthdate" ref={ref} name="birthdate" {...props} {...inputRegister} />
    </FormRow>
  );
});

export default BirthdayInput;
