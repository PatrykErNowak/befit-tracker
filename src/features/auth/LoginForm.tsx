import { useState } from 'react';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/Form/FormRow';
import Input from '../../ui/Form/Input';
import Button from '../../ui/Button';

function LoginForm() {
  const [email, setEmail] = useState('test.email.data@gmail.com');
  const [password, setPassword] = useState('12354462');

  return (
    <Form>
      <FormRow label="Email address">
        <Input type="email" name="login" id="login" autoComplete="username" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      </FormRow>
      <FormRow label="Password">
        <Input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormRow>
      <FormRow>
        <Button variation="primary">Sign in</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
