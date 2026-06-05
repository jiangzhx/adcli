// 由 oceanengine/ad_open_sdk_go models/model_campaign_update_v2_request.go 生成
// 不要手动编辑。

import type { CampaignUpdateV2BudgetMode } from "../models/index";

export interface CampaignUpdateV2Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode?: CampaignUpdateV2BudgetMode;
  campaign_id: number | string;
  campaign_name?: string;
  modify_time?: string;
}

