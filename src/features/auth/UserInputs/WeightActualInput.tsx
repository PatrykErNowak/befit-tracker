import { forwardRef } from 'react';
import FormRow from '../../../ui/Form/FormRow';
import { UseFormRegisterReturn } from 'react-hook-form';
import Input from '../../../ui/Form/Input';
import RadioGroup from '../../../ui/Buttons/RadioGroup';

type WeightActualInputProps = {
  errorMessage?: string;
  inputRegister?: UseFormRegisterReturn<'weight.actual'>;
  radioRegister?: UseFormRegisterReturn<'weight.unit'>;
} & React.ComponentProps<'input'>;

const WeightActualInput = forwardRef<HTMLInputElement, WeightActualInputProps>(function ({ errorMessage, inputRegister, radioRegister, ...props }, ref) {
  return (
    <FormRow id="weightActual" label="Body weight (actual)" error={errorMessage}>
      <Input min={1} type="number" id="weightActual" ref={ref} name="weight.actual" {...props} {...inputRegister} />
      <RadioGroup legend="Weight unit" buttons={['kg', 'lb']} name="weight.unit" {...radioRegister} />
    </FormRow>
  );
});

export default WeightActualInput;
