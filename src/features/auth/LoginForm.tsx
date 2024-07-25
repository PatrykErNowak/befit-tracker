import { SyntheticEvent, useState } from 'react';

import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import Button from '../../ui/Buttons/Button';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';

import { useSignIn } from './useSignIn';

function LoginForm() {
  const [email, setEmail] = useState('zap123451@gmail.com');
  const [password, setPassword] = useState('test1234');
  const { signIn, isPending } = useSignIn();

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!email || !password) return;

    signIn(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
          disabled={isPending}
          type="email"
          name="login"
          id="login"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          disabled={isPending}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormButtonsRow>
        <Button $variation="primary" disabled={isPending}>
          Sign in
        </Button>
      </FormButtonsRow>
    </Form>
  );
}

export default LoginForm;
