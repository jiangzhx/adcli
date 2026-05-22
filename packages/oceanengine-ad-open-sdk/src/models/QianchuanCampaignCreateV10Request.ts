// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanCampaignCreateV10BudgetMode, QianchuanCampaignCreateV10MarketingGoal, QianchuanCampaignCreateV10MarketingScene } from "../models";

export interface QianchuanCampaignCreateV10Request {
  advertiser_id: number;
  budget?: number;
  budget_mode: QianchuanCampaignCreateV10BudgetMode;
  campaign_name: string;
  marketing_goal: QianchuanCampaignCreateV10MarketingGoal;
  marketing_scene: QianchuanCampaignCreateV10MarketingScene;
}

