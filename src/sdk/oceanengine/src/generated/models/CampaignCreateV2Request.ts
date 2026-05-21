// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CampaignCreateV2BudgetMode, CampaignCreateV2CampaignBudgetOptimization, CampaignCreateV2CampaignType, CampaignCreateV2DedicateType, CampaignCreateV2DeliveryMode, CampaignCreateV2DeliveryRelatedNum, CampaignCreateV2LandingType, CampaignCreateV2MarketingPurpose, CampaignCreateV2MarketingScene, CampaignCreateV2Operation, CampaignCreateV2SmartBidType } from "../models";

export interface CampaignCreateV2Request {
  advertiser_id: number;
  budget?: number;
  budget_mode: CampaignCreateV2BudgetMode;
  campaign_budget_optimization?: CampaignCreateV2CampaignBudgetOptimization;
  campaign_name: string;
  campaign_type?: CampaignCreateV2CampaignType;
  dedicate_type?: CampaignCreateV2DedicateType;
  delivery_mode?: CampaignCreateV2DeliveryMode;
  delivery_related_num?: CampaignCreateV2DeliveryRelatedNum;
  landing_type: CampaignCreateV2LandingType;
  marketing_purpose?: CampaignCreateV2MarketingPurpose;
  marketing_scene?: CampaignCreateV2MarketingScene;
  operation?: CampaignCreateV2Operation;
  opt_permission?: number;
  smart_bid_type?: CampaignCreateV2SmartBidType;
}

