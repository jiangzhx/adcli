// Generated from oceanengine/ad_open_sdk_go models/model_brand_campaign_operate_v3_0_request.go
// Do not edit manually.

import type { BrandCampaignOperateV30Operate } from "../models/index";

export interface BrandCampaignOperateV30Request {
  advertiser_id: number | string;
  campaign_id: number | string;
  operate: BrandCampaignOperateV30Operate;
  staff_id?: number | string;
}

