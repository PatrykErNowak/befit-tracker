import { forwardRef } from 'react';
import RadioGroup from '../../../ui/Buttons/RadioGroup';
import FormRow from '../../../ui/Form/FormRow';
import Input from '../../../ui/Form/Input';
import { UseFormRegisterReturn } from 'react-hook-form';

type HeightInputProps = {
  errorMessage?: string;
  inputRegister?: UseFormRegisterReturn<'height.value'>;
  radioRegister?: UseFormRegisterReturn<'height.unit'>;
} & React.ComponentProps<'input'>;

const HeightInput = forwardRef<HTMLInputElement, HeightInputProps>(function ({ errorMessage, inputRegister, radioRegister, ...props }, ref) {
  const radioDisabled = { ...props }.disabled;

  return (
    <FormRow id="height" label="Height" error={errorMessage}>
      <Input min={1} type="number" id="height" ref={ref} name="height.value" {...props} {...inputRegister} />
      <RadioGroup legend="Height unit" buttons={['cm', 'in']} name="height.unit" disabled={radioDisabled} {...radioRegister} />
    </FormRow>
  );
});

export default HeightInput;
