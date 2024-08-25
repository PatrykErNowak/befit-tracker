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

// Nutritionix

export type CommonFood = {
  food_name: string;
  serving_unit: string;
  tag_name: string;
  serving_qty: number;
  common_type: number | null;
  tag_id: string;
  photo: {
    thumb: string;
  };
  locale: string;
};

export type BrandedFood = {
  food_name: string;
  serving_unit: string;
  nix_brand_id: string;
  brand_name_item_name: string;
  serving_qty: number;
  nf_calories: number;
  photo: {
    thumb: string;
    highres: string | null;
    is_user_uploaded: boolean;
  };
  brand_name: string;
  region: number;
  brand_type: number;
  nix_item_id: string;
  locale: string;
};

export type InstantSearchType = {
  common: CommonFood[];
  branded: BrandedFood[];
};
