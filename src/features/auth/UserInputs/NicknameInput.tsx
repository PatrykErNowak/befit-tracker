import { UseFormRegisterReturn } from 'react-hook-form';
import FormRow from '../../../ui/Form/FormRow';
import Input from '../../../ui/Form/Input';
import { forwardRef } from 'react';

type NicknameInputProps = {
  errorMessage?: string;
  inputRegister?: UseFormRegisterReturn<'nickname'>;
} & React.ComponentProps<'input'>;

const NicknameInput = forwardRef<HTMLInputElement, NicknameInputProps>(function ({ errorMessage, inputRegister, ...props }, ref) {
  return (
    <FormRow label="Nickname" error={errorMessage}>
      <Input type="text" id="nickname" autoComplete="nickname" name="nickname" ref={ref} {...inputRegister} {...props} />
    </FormRow>
  );
});

export default NicknameInput;
