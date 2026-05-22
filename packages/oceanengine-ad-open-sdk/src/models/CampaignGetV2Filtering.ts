// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CampaignGetV2FilteringCampaignBudgetOptimization, CampaignGetV2FilteringDedicateType, CampaignGetV2FilteringLandingType, CampaignGetV2FilteringSmartBidType, CampaignGetV2FilteringStatus } from "../models";

export interface CampaignGetV2Filtering {
  campaign_budget_optimization?: CampaignGetV2FilteringCampaignBudgetOptimization;
  campaign_create_time?: string;
  campaign_name?: string;
  dedicate_type?: CampaignGetV2FilteringDedicateType;
  ids?: number[];
  landing_type?: CampaignGetV2FilteringLandingType;
  smart_bid_type?: CampaignGetV2FilteringSmartBidType;
  status?: CampaignGetV2FilteringStatus;
}

