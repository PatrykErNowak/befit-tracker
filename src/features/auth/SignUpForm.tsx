import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';

type IFormInput = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm<IFormInput>();
  const { errors } = formState;

  const isLoading = false; // temp data

  const onSubmit: SubmitHandler<IFormInput> = ({ nickname, email, password }) => {
    console.log({ nickname, email, password });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Nickname" error={errors?.nickname?.message}>
        <Input
          type="text"
          id="nickname"
          disabled={isLoading}
          {...register('nickname', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Nickname needs a minimum of 2 characters',
            },
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
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
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) => value === getValues().password || 'Passwords need to match',
          })}
        />
      </FormRow>

      <FormButtonsRow>
        <Button type="submit" disabled={isLoading}>
          Create Account
        </Button>
      </FormButtonsRow>
    </Form>
  );
}

export default SignupForm;
