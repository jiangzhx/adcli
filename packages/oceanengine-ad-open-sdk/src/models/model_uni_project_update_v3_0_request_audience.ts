// Generated from oceanengine/ad_open_sdk_go models/model_uni_project_update_v3_0_request_audience.go
// Do not edit manually.

import type { UniProjectUpdateV30AudienceConvertedTimeDuration, UniProjectUpdateV30AudienceDistrict, UniProjectUpdateV30AudienceGender, UniProjectUpdateV30AudienceHideIfConverted, UniProjectUpdateV30AudienceLocationType, UniProjectUpdateV30AudiencePlatform, UniProjectUpdateV30RequestAudienceGeolocationInner } from "../models/index";

export interface UniProjectUpdateV30RequestAudience {
  age?: string[];
  city?: number[];
  converted_time_duration?: UniProjectUpdateV30AudienceConvertedTimeDuration;
  district?: UniProjectUpdateV30AudienceDistrict;
  gender?: UniProjectUpdateV30AudienceGender;
  geolocation?: UniProjectUpdateV30RequestAudienceGeolocationInner[];
  hide_if_converted?: UniProjectUpdateV30AudienceHideIfConverted;
  location_type?: UniProjectUpdateV30AudienceLocationType;
  platform?: UniProjectUpdateV30AudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
}

