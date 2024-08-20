export type UserMetaData = {
  nickname?: string;
  avatar?: FileList | string;
  email?: string;
  email_verified?: boolean;
  phone_verified?: boolean;
  sub?: string;
} & UserPhysicsData;

export type UserPhysicsData = {
  gender?: 'male' | 'female';
  birthdate?: string;
  height?: {
    value: string;
    unit: 'cm' | 'in';
  };
  weight?: {
    actual: string;
    desired: string;
    unit: 'kg' | 'lb';
    rateChange: string;
  };
  movementLvl?: string;
  trainingLvl?: string;
};

export type AtLeastOnePropertyOf<T> = {
  [K in keyof T]: { [L in K]: T[L] } & { [L in Exclude<keyof T, K>]?: T[L] };
}[keyof T];
