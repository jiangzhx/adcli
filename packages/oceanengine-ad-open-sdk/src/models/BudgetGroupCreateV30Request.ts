// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BudgetGroupCreateV30CampaignType, BudgetGroupCreateV30DeliveryMode } from "../models";

export interface BudgetGroupCreateV30Request {
  advertiser_id: number | string;
  budget_group_budget: number;
  budget_group_name: string;
  campaign_type: BudgetGroupCreateV30CampaignType;
  delivery_mode: BudgetGroupCreateV30DeliveryMode;
}

