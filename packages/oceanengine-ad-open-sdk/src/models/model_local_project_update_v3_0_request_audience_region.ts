// Generated from oceanengine/ad_open_sdk_go models/model_local_project_update_v3_0_request_audience_region.go
// Do not edit manually.

import type { LocalProjectUpdateV30AudienceRegionCityDivide, LocalProjectUpdateV30AudienceRegionLocationType } from "../models/index";

export interface LocalProjectUpdateV30RequestAudienceRegion {
  city: number[];
  city_divide?: LocalProjectUpdateV30AudienceRegionCityDivide;
  location_type?: LocalProjectUpdateV30AudienceRegionLocationType;
  region_ver: string;
}

