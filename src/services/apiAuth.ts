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
