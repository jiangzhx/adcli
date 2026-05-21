// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { UniProjectCreateV30AudienceConvertedTimeDuration, UniProjectCreateV30AudienceDistrict, UniProjectCreateV30AudienceGender, UniProjectCreateV30AudienceHideIfConverted, UniProjectCreateV30AudienceLocationType, UniProjectCreateV30AudiencePlatform, UniProjectCreateV30RequestAudienceGeolocationInner } from "../models";

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

