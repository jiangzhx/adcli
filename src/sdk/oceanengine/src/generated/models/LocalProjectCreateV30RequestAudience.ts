// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalProjectCreateV30AudienceAge, LocalProjectCreateV30AudienceConvertedTimeDuration, LocalProjectCreateV30AudienceCustomizedInterestAction, LocalProjectCreateV30AudienceDistrict, LocalProjectCreateV30AudienceFilterAwemeAbnormalActive, LocalProjectCreateV30AudienceFilterAwemeFansCount, LocalProjectCreateV30AudienceGender, LocalProjectCreateV30AudienceHideIfConverted, LocalProjectCreateV30RequestAudienceActionConfig, LocalProjectCreateV30RequestAudienceCustomArea, LocalProjectCreateV30RequestAudienceInterestConfig, LocalProjectCreateV30RequestAudiencePoiAround, LocalProjectCreateV30RequestAudienceRegion } from "../models";

export interface LocalProjectCreateV30RequestAudience {
  action_config?: LocalProjectCreateV30RequestAudienceActionConfig;
  age?: LocalProjectCreateV30AudienceAge[];
  converted_time_duration?: LocalProjectCreateV30AudienceConvertedTimeDuration;
  custom_area?: LocalProjectCreateV30RequestAudienceCustomArea;
  customized_interest_action?: LocalProjectCreateV30AudienceCustomizedInterestAction;
  district: LocalProjectCreateV30AudienceDistrict;
  filter_aweme_abnormal_active?: LocalProjectCreateV30AudienceFilterAwemeAbnormalActive;
  filter_aweme_fans_count?: LocalProjectCreateV30AudienceFilterAwemeFansCount;
  gender?: LocalProjectCreateV30AudienceGender;
  hide_if_converted?: LocalProjectCreateV30AudienceHideIfConverted;
  interest_config?: LocalProjectCreateV30RequestAudienceInterestConfig;
  poi_around?: LocalProjectCreateV30RequestAudiencePoiAround;
  region?: LocalProjectCreateV30RequestAudienceRegion;
  retargeting_tags?: number[];
  retargeting_tags_exclude?: number[];
}

