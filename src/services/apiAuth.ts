import supabase, { supabaseUrl } from './supabase';
import { UserMetaData } from './types';

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

export async function updateCurrentUser(userData: UserMetaData) {
  // 1. Update data without Avatar
  let avatarFile: File | null = null;

  if (typeof userData.avatar === 'object') {
    avatarFile = userData.avatar[0] as File;
    delete userData.avatar;
  }

  const { data, error } = await supabase.auth.updateUser({
    data: { ...userData },
  });

  if (error) throw new Error(error.message);
  if (!avatarFile) return data;

  // 2. Upload avatar to the storage
  const fileName = `avatar-${data.user.id}`;

  const { error: errorStorage } = await supabase.storage.from('avatars').upload(fileName, avatarFile, { upsert: true });

  if (errorStorage) throw new Error(errorStorage.message);

  // 3. Update avatar in the user Data
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
