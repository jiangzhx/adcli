// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/product.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

export interface ProductInfo {
  industry_id?: number;
  sub_industry_id?: string;
  industry_name?: string;
  sub_industry_name?: string;
  library_id?: KuaishouId;
  outer_id?: string;
  product_id?: KuaishouId;
  name?: string;
  title?: string;
  description?: string;
  main_image_url?: string[];
  image_urls?: string[];
  video?: VideoInfo;
  target_urls?: UrlParamSneak;
  condition?: string;
  label?: string[];
  first_category_id?: KuaishouId;
  first_category_name?: string;
  second_category_id?: KuaishouId;
  second_category_name?: string;
  third_category_id?: KuaishouId;
  third_category_name?: string;
  category_id?: KuaishouId;
  category_name?: string;
  brand_id?: string;
  brand_name?: string;
  en_brand_name?: string;
  value?: number;
  price?: number;
  saving?: number;
  discount?: number;
  comments?: number;
  address?: string;
  feature?: string;
  sales_promotion?: string;
  age_v2?: string[];
  gender?: number;
  province_v2?: string[];
  city_v2?: string[];
  stock?: number;
  status?: number;
  check_status?: number;
  check_error?: string[];
  online_time?: number;
  offline_time?: number;
  create_time?: number;
  update_time?: number;
  slogan?: string;
  ecom_product_info?: EcomProductInfoSneak;
  insurance_product_info?: InsuranceProductInfoSneak;
  stack_room_product_info?: StackRoomProductInfoSneak;
  au_video_product_info?: AuVideoProductInfoSneak;
  pharmaceutical_product_info?: PharmaceuticalProductInfoSneak;
  recruitment_product_info?: RecruitmentProductInfoSneak;
  regional_service_product_info?: RegionalServiceProductInfoSneak;
  communication_product_info?: CommunicationProductInfoSneak;
}

export interface VideoInfo {
  url?: string;
  width?: number;
  height?: number;
  duration?: number;
  ratio?: number;
}

export interface UrlParamSneak {
  pc?: string;
  mobile?: string;
  android_app?: string;
  ios_app?: string;
  universal_link?: string;
}

export interface EcomProductInfoSneak {
  spu_id?: string;
  condition?: string;
  mark?: number;
  bought?: number;
  comments?: number;
}

export interface InsuranceProductInfoSneak {
  special_pay_out?: InsuranceSpecialPayOutInfoSneak;
  insurer?: string;
  insurer_type?: string;
  hos_address?: string;
  start_time?: string;
  free_amount?: string;
  spokesperson?: string;
  in_address?: string;
  highest_protection_cost?: string;
  payment_term?: string;
  complimentary_insurance?: string;
  payment_method?: string;
  payment_channel?: string;
  upgraded?: string;
  payout_amount?: number;
  payout_ratio?: number;
  total_price?: number;
  first_month_price?: number;
  month_price?: number;
  normal_payout?: number;
  disease_payout?: number;
  insured_min_age?: number;
  insured_max_age?: number;
  staging?: number;
  social_indemnity?: number;
  auto_deduction?: number;
  auto_renew?: number;
  green?: number;
  insurer_time?: number;
}

export interface InsuranceSpecialPayOutInfoSneak {
  name?: string;
  payout?: number;
  wait?: number;
}

export interface StackRoomProductInfoSneak {
  author?: string;
  extra_tags?: string;
  chapter_name1?: string;
  chapter_content1?: string;
  chapter_name2?: string;
  chapter_content2?: string;
  chapter_name3?: string;
  chapter_content3?: string;
  long_and_short_stories?: string;
  book_city?: string;
  start_paid_chapter?: string;
  theme?: number;
  plot?: number;
  role?: number;
  fiction_style?: number;
  channel?: number;
  origin_nation?: number;
  first_status?: number;
  pay_status?: number;
  is_audio_novel?: number;
  min_pay_amount?: number;
  favorite_count?: number;
}

export interface AuVideoProductInfoSneak {
  theme?: string;
  origin_nation?: string;
  album_name?: string;
  platform_attributes?: string;
  channel?: string;
  plot?: string;
  copyright?: string;
  author?: string[];
  starring?: string[];
  talent_id?: string[];
  release_date?: number;
  author_fans?: number;
  impression_nums?: number;
  play_nums?: number;
  likes_nums?: number;
  favorite_user_nums?: number;
  forward_nums?: number;
  comment_nums?: number;
  score?: number;
  album_sort?: number;
  is_online_earning?: number;
  episodes?: number;
  episode_duration?: number;
  paid_episodes?: number;
  unit_price?: number;
  annual_vip_type?: number;
  semiannual_vip_type?: number;
  max_charge?: number;
  min_charge?: number;
  recommend_charge?: number;
}

export interface PharmaceuticalProductInfoSneak {
  spu_id?: string;
  tel?: string;
  nationality?: string;
  province?: string;
  city?: string;
  district?: string;
  region?: string[];
  value_min?: number;
  value_max?: number;
  price_min?: number;
  price_max?: number;
  saving_start_time?: number;
  saving_end_time?: number;
  product_view_count?: number;
  favorite_count?: number;
  favourable_comment_rate?: number;
  bought?: number;
  mark?: number;
}

export interface RecruitmentProductInfoSneak {
  job_type?: string;
  post_type?: string;
  salary_of_year?: string;
  salary?: string;
  education?: string;
  service_year?: string;
  tel?: string;
  mail?: string;
  nationality?: string;
  province?: string;
  city?: string;
  district?: string;
  region?: string[];
  benefits?: string[];
  head_count?: number;
}

export interface RegionalServiceProductInfoSneak {
  spu_id?: string;
  tel?: string;
  province_id?: string;
  city_id?: string;
  district_id?: string;
  nationality_id?: string;
  province?: string;
  city?: string;
  district?: string;
  region?: string[];
  saving_start_time?: number;
  saving_end_time?: number;
  product_view_count?: number;
  favorite_count?: number;
  favourable_comment_rate?: number;
  bought?: number;
  mark?: number;
}

export interface CommunicationProductInfoSneak {
  total_traffic?: string;
  directional_traffic?: string;
  general_traffic?: string;
  province_id?: string;
  city_id?: string;
  district_id?: string;
  nationality_id?: string;
  province?: string;
  city?: string;
  district?: string;
  region?: string[];
  saving_start_time?: number;
  saving_end_time?: number;
  product_view_count?: number;
  favorite_count?: number;
  favourable_comment_rate?: number;
  bought?: number;
  mark?: number;
}
