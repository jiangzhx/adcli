// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_read_targeting_setting.go
// Do not edit manually.

import type { AgeStruct, DeviceBrandModel, ExcludedConvertedAudience, GeoLocations, WechatAdBehavior } from "../v3/index";

export interface ReadTargetingSetting {
  geo_location?: GeoLocations;
  gender?: string[];
  age?: AgeStruct[];
  education?: string[];
  app_install_status?: string[];
  marital_status?: string[];
  excluded_converted_audience?: ExcludedConvertedAudience;
  custom_audience?: number[];
  excluded_custom_audience?: number[];
  device_brand_model?: DeviceBrandModel;
  user_os?: string[];
  network_type?: string[];
  device_price?: string[];
  wechat_ad_behavior?: WechatAdBehavior;
  game_consumption_level?: string[];
  excluded_os?: string[];
}

