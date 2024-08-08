import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../ui/Buttons/Button';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';
import { useSignUpSteps } from '../../contexts/SignUpContext';
import { useSignUp } from './useSignUp';
import NicknameInput from './UserInputs/NicknameInput';

type IFormInput = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

function SignupForm() {
  const { signUp, isPending } = useSignUp();
  const { goToNextStep } = useSignUpSteps();
  const { register, formState, getValues, handleSubmit, reset } =
    useForm<IFormInput>();

  const { errors } = formState;

  const onSubmit: SubmitHandler<IFormInput> = async ({
    email,
    nickname,
    password,
  }) => {
    signUp(
      { nickname, email, password },
      { onSuccess: goToNextStep, onSettled: () => reset() }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <NicknameInput
        errorMessage={errors?.nickname?.message}
        disabled={isPending}
        inputRegister={register('nickname', {
          required: 'This field is required',
          minLength: {
            value: 2,
            message: 'Nickname needs a minimum of 2 characters',
          },
        })}
      />

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          autoComplete="email"
          disabled={isPending}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          autoComplete="new-password"
          disabled={isPending}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          disabled={isPending}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
        />
      </FormRow>

      <FormButtonsRow>
        <Button type="submit" disabled={isPending}>
          Create Account
        </Button>
      </FormButtonsRow>
    </Form>
  );
}

export default SignupForm;
