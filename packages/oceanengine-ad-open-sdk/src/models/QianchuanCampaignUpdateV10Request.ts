// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanCampaignUpdateV10BudgetMode } from "../models";

export interface QianchuanCampaignUpdateV10Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode?: QianchuanCampaignUpdateV10BudgetMode;
  campaign_id: number | string;
  campaign_name?: string;
}

