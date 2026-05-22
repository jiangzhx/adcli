// Generated from oceanengine/ad_open_sdk_go models/model_campaign_update_status_v2_request.go
// Do not edit manually.

import type { CampaignUpdateStatusV2OptStatus } from "../models/index";

export interface CampaignUpdateStatusV2Request {
  advertiser_id: number | string;
  campaign_ids: (number | string)[];
  opt_status: CampaignUpdateStatusV2OptStatus;
}

