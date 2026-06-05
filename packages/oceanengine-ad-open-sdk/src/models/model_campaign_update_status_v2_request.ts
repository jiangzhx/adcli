// 由 oceanengine/ad_open_sdk_go models/model_campaign_update_status_v2_request.go 生成
// 不要手动编辑。

import type { CampaignUpdateStatusV2OptStatus } from "../models/index";

export interface CampaignUpdateStatusV2Request {
  advertiser_id: number | string;
  campaign_ids: (number | string)[];
  opt_status: CampaignUpdateStatusV2OptStatus;
}

