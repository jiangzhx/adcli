// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AgeStruct, AppBehavior, BehaviorOrInterest, DeviceBrandModel, ExcludedConvertedAudience, GeoLocations, Keyword, ResidentialCommunityPriceStruct, TemperatureStruct, WechatAdBehavior } from "../models";

export interface ReadTargetingSettingForAdgroup {
  age?: AgeStruct[];
  gender?: string[];
  education?: string[];
  marital_status?: string[];
  working_status?: string[];
  geo_location?: GeoLocations;
  user_os?: string[];
  new_device?: string[];
  device_price?: string[];
  device_brand_model?: DeviceBrandModel;
  network_type?: string[];
  network_operator?: string[];
  network_scene?: string[];
  dressing_index?: string[];
  uv_index?: string[];
  makeup_index?: string[];
  climate?: string[];
  temperature?: TemperatureStruct[];
  air_quality_index?: string[];
  app_install_status?: string[];
  consumption_status?: string[];
  game_consumption_level?: string[];
  residential_community_price?: ResidentialCommunityPriceStruct[];
  financial_situation?: string[];
  consumption_type?: string[];
  wechat_ad_behavior?: WechatAdBehavior;
  custom_audience?: number[];
  excluded_custom_audience?: number[];
  behavior_or_interest?: BehaviorOrInterest;
  wechat_official_account_category?: number[];
  mobile_union_category?: number[];
  business_interest?: number[];
  keyword?: Keyword;
  app_behavior?: AppBehavior;
  paid_user?: string[];
  deprecated_custom_audience?: number[];
  deprecated_excluded_custom_audience?: number[];
  deprecated_region?: number[];
  mini_game_qq_status?: string[];
  excluded_converted_audience?: ExcludedConvertedAudience;
}

