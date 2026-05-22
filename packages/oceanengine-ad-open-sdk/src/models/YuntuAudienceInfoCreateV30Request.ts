// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { YuntuAudienceInfoCreateV30RequestCalculatePoolsInner } from "../models";

export interface YuntuAudienceInfoCreateV30Request {
  advertiser_id: number | string;
  calculate_pools: YuntuAudienceInfoCreateV30RequestCalculatePoolsInner[];
  expire_date: string;
  name: string;
  service_provider_id: number | string;
  yuntu_brand_id: number | string;
}

