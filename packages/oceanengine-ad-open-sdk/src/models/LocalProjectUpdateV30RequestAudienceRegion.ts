// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalProjectUpdateV30AudienceRegionCityDivide, LocalProjectUpdateV30AudienceRegionLocationType } from "../models";

export interface LocalProjectUpdateV30RequestAudienceRegion {
  city: number[];
  city_divide?: LocalProjectUpdateV30AudienceRegionCityDivide;
  location_type?: LocalProjectUpdateV30AudienceRegionLocationType;
  region_ver: string;
}

