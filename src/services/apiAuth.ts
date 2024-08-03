import supabase from './supabase';
import { AtLeastOnePropertyOf, UserUpdateData } from './types';

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
        avatar: '',
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
// Logout User

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
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

export async function updateCurrentUser(userData: AtLeastOnePropertyOf<UserUpdateData>) {
  const { data, error } = await supabase.auth.updateUser({
    data: { ...userData },
  });

  if (error) throw new Error(error.message);

  return data;
}
