// Generated from oceanengine/ad_open_sdk_go models/model_local_project_create_v3_0_request_audience_region.go
// Do not edit manually.

import type { LocalProjectCreateV30AudienceRegionCityDivide, LocalProjectCreateV30AudienceRegionLocationType } from "../models/index";

export interface LocalProjectCreateV30RequestAudienceRegion {
  city: number[];
  city_divide?: LocalProjectCreateV30AudienceRegionCityDivide;
  location_type?: LocalProjectCreateV30AudienceRegionLocationType;
  region_ver: string;
}

