import { SetUpProfileInputs } from '../features/auth/SetUpProfileForm';

export type UserMetaData = {
  nickname: string;
  avatar: string;
  email: string;
  email_verified: boolean;
  phone_verified: boolean;
  sub: string;
} & SetUpProfileInputs;
