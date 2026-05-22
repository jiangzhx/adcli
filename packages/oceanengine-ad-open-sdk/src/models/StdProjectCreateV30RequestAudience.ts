// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StdProjectCreateV30AudienceAge, StdProjectCreateV30AudienceAndroidOsv, StdProjectCreateV30AudienceConvertedTimeDuration, StdProjectCreateV30AudienceDistrict, StdProjectCreateV30AudienceFilterEvent, StdProjectCreateV30AudienceGender, StdProjectCreateV30AudienceHarmonyOsv, StdProjectCreateV30AudienceHideIfConverted, StdProjectCreateV30AudienceHideIfExists, StdProjectCreateV30AudienceIosOsv, StdProjectCreateV30AudienceLocationType, StdProjectCreateV30AudienceRegionRecommend, StdProjectCreateV30RequestAudienceGeolocationInner } from "../models";

export interface StdProjectCreateV30RequestAudience {
  age?: StdProjectCreateV30AudienceAge[];
  android_osv?: StdProjectCreateV30AudienceAndroidOsv;
  city?: number[];
  converted_time_duration?: StdProjectCreateV30AudienceConvertedTimeDuration;
  district?: StdProjectCreateV30AudienceDistrict;
  filter_event?: StdProjectCreateV30AudienceFilterEvent[];
  gender?: StdProjectCreateV30AudienceGender;
  geolocation?: StdProjectCreateV30RequestAudienceGeolocationInner[];
  harmony_osv?: StdProjectCreateV30AudienceHarmonyOsv;
  hide_if_converted?: StdProjectCreateV30AudienceHideIfConverted;
  hide_if_exists?: StdProjectCreateV30AudienceHideIfExists;
  ios_osv?: StdProjectCreateV30AudienceIosOsv;
  location_type?: StdProjectCreateV30AudienceLocationType;
  region_recommend?: StdProjectCreateV30AudienceRegionRecommend;
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
}

