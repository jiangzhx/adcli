// Generated from oceanengine/ad_open_sdk_go models/model_ad_get_v2_response_data_audience.go
// Do not edit manually.

import type { AdGetV2DataAudienceAc, AdGetV2DataAudienceActivateType, AdGetV2DataAudienceAge, AdGetV2DataAudienceAndroidOsv, AdGetV2DataAudienceAppBehaviorTarget, AdGetV2DataAudienceArticleCategory, AdGetV2DataAudienceAutoExtendTargets, AdGetV2DataAudienceAwemeFanBehaviors, AdGetV2DataAudienceAwemeFanTimeScope, AdGetV2DataAudienceCareer, AdGetV2DataAudienceCarrier, AdGetV2DataAudienceDeviceBrand, AdGetV2DataAudienceDeviceType, AdGetV2DataAudienceDistrict, AdGetV2DataAudienceDpaRtaRecommendType, AdGetV2DataAudienceDpaRtaSwitch, AdGetV2DataAudienceGender, AdGetV2DataAudienceInterestActionMode, AdGetV2DataAudienceIosOsv, AdGetV2DataAudienceLocationType, AdGetV2DataAudiencePlatform, AdGetV2DataAudienceSuperiorPopularityType, AdGetV2ResponseDataAudienceAction, AdGetV2ResponseDataAudienceGeolocationInner } from "../models/index";

export interface AdGetV2ResponseDataAudience {
  ac?: AdGetV2DataAudienceAc[];
  action?: AdGetV2ResponseDataAudienceAction;
  activate_type?: AdGetV2DataAudienceActivateType[];
  ad_tag?: number[];
  age?: AdGetV2DataAudienceAge[];
  android_osv?: AdGetV2DataAudienceAndroidOsv;
  app_behavior_target?: AdGetV2DataAudienceAppBehaviorTarget;
  app_category?: number[];
  app_ids?: number | string[];
  article_category?: AdGetV2DataAudienceArticleCategory[];
  auto_extend_targets?: AdGetV2DataAudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: AdGetV2DataAudienceAwemeFanBehaviors[];
  aweme_fan_categories?: number[];
  aweme_fan_time_scope?: AdGetV2DataAudienceAwemeFanTimeScope;
  aweme_fans_numbers?: number[];
  business_ids?: number | string[];
  career?: AdGetV2DataAudienceCareer[];
  carrier?: AdGetV2DataAudienceCarrier[];
  city?: number[];
  device_brand?: AdGetV2DataAudienceDeviceBrand[];
  device_type?: AdGetV2DataAudienceDeviceType[];
  district?: AdGetV2DataAudienceDistrict;
  dpa_rta_recommend_type?: AdGetV2DataAudienceDpaRtaRecommendType;
  dpa_rta_switch?: AdGetV2DataAudienceDpaRtaSwitch;
  exclude_flow_package?: number[];
  filter_aweme_abnormal_active?: number;
  filter_aweme_fans_count?: number;
  filter_own_aweme_fans?: number;
  flow_package?: number[];
  gender?: AdGetV2DataAudienceGender;
  geolocation?: AdGetV2ResponseDataAudienceGeolocationInner[];
  interest_action_mode?: AdGetV2DataAudienceInterestActionMode;
  interest_categories?: number[];
  interest_tags?: number[];
  interest_words?: number[];
  ios_osv?: AdGetV2DataAudienceIosOsv;
  launch_price?: number[];
  location_type?: AdGetV2DataAudienceLocationType;
  own_aweme_number?: number;
  platform?: AdGetV2DataAudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  superior_popularity_type?: AdGetV2DataAudienceSuperiorPopularityType;
  user_type?: number[];
}

