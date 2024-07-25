import { SetUpProfileInputs } from '../features/auth/SetUpProfileForm';
import supabase from './supabase';

// Sign Up User
type SignUpProps = {
  nickname: string;
  email: string;
  password: string;
};

export async function signUp({ nickname, email, password }: SignUpProps) {
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

// ---------------------------------------------------------------------------
// Sign In User

type SignInProps = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: SignInProps) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data.user;
}

// ---------------------------------------------------------------------------
// Get Current User (for authorization and authentication)

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
}

// ---------------------------------------------------------------------------
// Update data of Current User

export async function updateCurrentUser(userData: SetUpProfileInputs) {
  const { data, error } = await supabase.auth.updateUser({
    data: { ...userData },
  });

  if (error) throw new Error(error.message);

  return data;
}
