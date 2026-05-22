// Generated from tencentad/marketing-api-go-sdk pkg/model/model_write_targeting_setting_for_adgroup.go
// Do not edit manually.

import type { AgeStruct, BehaviorOrInterest, DeviceBrandModel, ExcludedConvertedAudience, GeoLocations, WechatAdBehavior } from "../model/index";

export interface WriteTargetingSettingForAdgroup {
  age?: AgeStruct[];
  gender?: string[];
  education?: string[];
  marital_status?: string[];
  geo_location?: GeoLocations;
  user_os?: string[];
  device_price?: string[];
  device_brand_model?: DeviceBrandModel;
  network_type?: string[];
  network_operator?: string[];
  app_install_status?: string[];
  consumption_status?: string[];
  game_consumption_level?: string[];
  financial_situation?: string[];
  wechat_ad_behavior?: WechatAdBehavior;
  custom_audience?: number[];
  excluded_custom_audience?: number[];
  behavior_or_interest?: BehaviorOrInterest;
  wechat_official_account_category?: number[];
  mini_game_qq_status?: string[];
  excluded_converted_audience?: ExcludedConvertedAudience;
}

