// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_campaign_create_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanCampaignCreateV10BudgetMode, QianchuanCampaignCreateV10MarketingGoal, QianchuanCampaignCreateV10MarketingScene } from "../models/index";

export interface QianchuanCampaignCreateV10Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode: QianchuanCampaignCreateV10BudgetMode;
  campaign_name: string;
  marketing_goal: QianchuanCampaignCreateV10MarketingGoal;
  marketing_scene: QianchuanCampaignCreateV10MarketingScene;
}

