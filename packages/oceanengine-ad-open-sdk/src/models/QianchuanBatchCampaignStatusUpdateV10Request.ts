// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanBatchCampaignStatusUpdateV10OptStatus } from "../models";

export interface QianchuanBatchCampaignStatusUpdateV10Request {
  advertiser_id: number | string;
  campaign_ids: number | string[];
  opt_status: QianchuanBatchCampaignStatusUpdateV10OptStatus;
}

