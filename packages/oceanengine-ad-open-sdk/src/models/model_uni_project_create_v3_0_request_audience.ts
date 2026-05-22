// Generated from oceanengine/ad_open_sdk_go models/model_uni_project_create_v3_0_request_audience.go
// Do not edit manually.

import type { UniProjectCreateV30AudienceConvertedTimeDuration, UniProjectCreateV30AudienceDistrict, UniProjectCreateV30AudienceGender, UniProjectCreateV30AudienceHideIfConverted, UniProjectCreateV30AudienceLocationType, UniProjectCreateV30AudiencePlatform, UniProjectCreateV30RequestAudienceGeolocationInner } from "../models/index";

export interface UniProjectCreateV30RequestAudience {
  age?: string[];
  city?: number[];
  converted_time_duration?: UniProjectCreateV30AudienceConvertedTimeDuration;
  district?: UniProjectCreateV30AudienceDistrict;
  gender?: UniProjectCreateV30AudienceGender;
  geolocation?: UniProjectCreateV30RequestAudienceGeolocationInner[];
  hide_if_converted?: UniProjectCreateV30AudienceHideIfConverted;
  location_type?: UniProjectCreateV30AudienceLocationType;
  platform?: UniProjectCreateV30AudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
}

