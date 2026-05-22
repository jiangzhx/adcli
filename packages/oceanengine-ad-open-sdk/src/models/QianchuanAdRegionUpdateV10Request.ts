// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdRegionUpdateV10District, QianchuanAdRegionUpdateV10ElectricFenceRegion, QianchuanAdRegionUpdateV10ExcludeLimitedRegion, QianchuanAdRegionUpdateV10LocationType } from "../models";

export interface QianchuanAdRegionUpdateV10Request {
  ad_ids: number | string[];
  advertiser_id: number | string;
  city?: number[];
  district?: QianchuanAdRegionUpdateV10District;
  electric_fence_region?: QianchuanAdRegionUpdateV10ElectricFenceRegion;
  exclude_limited_region?: QianchuanAdRegionUpdateV10ExcludeLimitedRegion;
  location_type?: QianchuanAdRegionUpdateV10LocationType;
  region_version?: string;
}

