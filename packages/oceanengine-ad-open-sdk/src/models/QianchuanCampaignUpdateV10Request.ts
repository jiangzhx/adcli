// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanCampaignUpdateV10BudgetMode } from "../models";

export interface QianchuanCampaignUpdateV10Request {
  advertiser_id: number;
  budget?: number;
  budget_mode?: QianchuanCampaignUpdateV10BudgetMode;
  campaign_id: number;
  campaign_name?: string;
}

