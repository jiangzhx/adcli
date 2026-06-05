// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_campaign_update_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanCampaignUpdateV10BudgetMode } from "../models/index";

export interface QianchuanCampaignUpdateV10Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode?: QianchuanCampaignUpdateV10BudgetMode;
  campaign_id: number | string;
  campaign_name?: string;
}

