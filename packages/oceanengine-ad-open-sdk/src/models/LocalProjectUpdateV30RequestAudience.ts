// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalProjectUpdateV30AudienceAge, LocalProjectUpdateV30AudienceConvertedTimeDuration, LocalProjectUpdateV30AudienceCustomizedInterestAction, LocalProjectUpdateV30AudienceDistrict, LocalProjectUpdateV30AudienceFilterAwemeAbnormalActive, LocalProjectUpdateV30AudienceFilterAwemeFansCount, LocalProjectUpdateV30AudienceGender, LocalProjectUpdateV30AudienceHideIfConverted, LocalProjectUpdateV30RequestAudienceActionConfig, LocalProjectUpdateV30RequestAudienceCustomArea, LocalProjectUpdateV30RequestAudienceInterestConfig, LocalProjectUpdateV30RequestAudiencePoiAround, LocalProjectUpdateV30RequestAudienceRegion } from "../models";

export interface LocalProjectUpdateV30RequestAudience {
  action_config?: LocalProjectUpdateV30RequestAudienceActionConfig;
  age?: LocalProjectUpdateV30AudienceAge[];
  converted_time_duration?: LocalProjectUpdateV30AudienceConvertedTimeDuration;
  custom_area?: LocalProjectUpdateV30RequestAudienceCustomArea;
  customized_interest_action?: LocalProjectUpdateV30AudienceCustomizedInterestAction;
  district?: LocalProjectUpdateV30AudienceDistrict;
  filter_aweme_abnormal_active?: LocalProjectUpdateV30AudienceFilterAwemeAbnormalActive;
  filter_aweme_fans_count?: LocalProjectUpdateV30AudienceFilterAwemeFansCount;
  gender?: LocalProjectUpdateV30AudienceGender;
  hide_if_converted?: LocalProjectUpdateV30AudienceHideIfConverted;
  interest_config?: LocalProjectUpdateV30RequestAudienceInterestConfig;
  poi_around?: LocalProjectUpdateV30RequestAudiencePoiAround;
  region?: LocalProjectUpdateV30RequestAudienceRegion;
  retargeting_tags?: number[];
  retargeting_tags_exclude?: number[];
}

