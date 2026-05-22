// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CampaignUpdateV2BudgetMode } from "../models";

export interface CampaignUpdateV2Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode?: CampaignUpdateV2BudgetMode;
  campaign_id: number | string;
  campaign_name?: string;
  modify_time?: string;
}

