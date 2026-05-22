// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_batch_campaign_status_update_v1_0_request.go
// Do not edit manually.

import type { QianchuanBatchCampaignStatusUpdateV10OptStatus } from "../models/index";

export interface QianchuanBatchCampaignStatusUpdateV10Request {
  advertiser_id: number | string;
  campaign_ids: (number | string)[];
  opt_status: QianchuanBatchCampaignStatusUpdateV10OptStatus;
}

