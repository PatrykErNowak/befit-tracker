import { useState } from 'react';

import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import Button from '../../ui/Buttons/Button';
import FormButtonsRow from '../../ui/Form/FormButtonsRow';

import { useSignIn } from './useSignIn';
import styled from 'styled-components';

const FormExt = styled(Form)`
  position: relative;
`;

const TestDataButton = styled.button`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  border: transparent;
  background-color: transparent;
  color: var(--color-brand-600);
  text-decoration: underline;
`;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isPending } = useSignIn();

  function handleSubmit(e: React.FormEvent) {
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

  function handleTestData(e: React.SyntheticEvent) {
    e.preventDefault();
    setEmail('example@gmail.com');
    setPassword('test1234');
  }

  return (
    <FormExt onSubmit={handleSubmit}>
      <TestDataButton onClick={handleTestData}>
        Enter Test User Credentials
      </TestDataButton>
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
    </FormExt>
  );
}

export default LoginForm;
