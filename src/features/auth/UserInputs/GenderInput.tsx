import { forwardRef } from 'react';
import FormRadioRow from '../../../ui/Form/FormRadioRow';
import Radio from '../../../ui/Form/Radio';
import { UseFormRegisterReturn } from 'react-hook-form';

type GenderInputProps = {
  errorMessage?: string;
  inputRegister?: UseFormRegisterReturn<'gender'>;
} & React.ComponentProps<'input'>;

const GenderInput = forwardRef<HTMLInputElement, GenderInputProps>(function ({ errorMessage, inputRegister, ...props }, ref) {
  return (
    <FormRadioRow label="Gender" error={errorMessage} horizontal>
      <Radio id="female" label="Female" value="female" name="gender" ref={ref} {...props} {...inputRegister} />
      <Radio id="male" label="Male" value="male" name="gender" ref={ref} {...props} {...inputRegister} />
    </FormRadioRow>
  );
});

export default GenderInput;
