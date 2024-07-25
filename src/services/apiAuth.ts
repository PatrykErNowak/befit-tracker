import { SetUpProfileInputs } from '../features/auth/SetUpProfileForm';
import supabase from './supabase';

type signUpProps = {
  nickname: string;
  email: string;
  password: string;
};

export async function signUp({ nickname, email, password }: signUpProps) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickname,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function updateCurrentUser(userData: SetUpProfileInputs) {
  const { data, error } = await supabase.auth.updateUser({
    data: { ...userData },
  });

  if (error) throw new Error(error.message);

  return data;
}
