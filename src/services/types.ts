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

export type FoodItem = {
  foods: [
    {
      food_name: string;
      brand_name: string;
      serving_qty: number;
      serving_unit: string;
      serving_weight_grams: number;
      nf_metric_qty: number;
      nf_metric_uom: string;
      nf_calories: number;
      nf_total_fat: number;
      nf_saturated_fat: number | null;
      nf_cholesterol: number | null;
      nf_sodium: number | null;
      nf_total_carbohydrate: number;
      nf_dietary_fiber: number | null;
      nf_sugars: number | null;
      nf_protein: number;
      nf_potassium: number | null;
      nf_p: number | null;
      full_nutrients: [
        {
          attr_id: 203;
          value: number;
        },
        {
          attr_id: 204;
          value: number;
        },
        {
          attr_id: 205;
          value: number;
        },
        {
          attr_id: 208;
          value: number;
        },
        {
          attr_id: 307;
          value: number;
        }
      ];
      nix_brand_name: string;
      nix_brand_id: string;
      nix_item_name: string;
      nix_item_id: string;
      metadata: object;
      source: number;
      ndb_no: null;
      tags: null;
      alt_measures: null;
      lat: null;
      lng: null;
      photo: {
        thumb: string;
        highres: string;
        is_user_uploaded: boolean;
      };
      note: null;
      class_code: null;
      brick_code: null;
      tag_id: null;
      updated_at: string;
      nf_ingredient_statement: string;
    }
  ];
};
