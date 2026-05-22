// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CampaignGetV2DataListBudgetMode, CampaignGetV2DataListCampaignBudgetOptimization, CampaignGetV2DataListCampaignType, CampaignGetV2DataListDedicateType, CampaignGetV2DataListDeliveryMode, CampaignGetV2DataListDeliveryRelatedNum, CampaignGetV2DataListLandingType, CampaignGetV2DataListMarketingPurpose, CampaignGetV2DataListMarketingScene, CampaignGetV2DataListSmartBidType, CampaignGetV2DataListStatus } from "../models";

export interface CampaignGetV2ResponseDataListInner {
  advertiser_id?: number | string;
  budget?: number;
  budget_mode?: CampaignGetV2DataListBudgetMode;
  campaign_budget_optimization?: CampaignGetV2DataListCampaignBudgetOptimization;
  campaign_create_time?: string;
  campaign_id?: number | string;
  campaign_modify_time?: string;
  campaign_type?: CampaignGetV2DataListCampaignType;
  dedicate_type?: CampaignGetV2DataListDedicateType;
  delivery_mode?: CampaignGetV2DataListDeliveryMode;
  delivery_related_num?: CampaignGetV2DataListDeliveryRelatedNum;
  id?: number | string;
  landing_type?: CampaignGetV2DataListLandingType;
  marketing_purpose?: CampaignGetV2DataListMarketingPurpose;
  marketing_scene?: CampaignGetV2DataListMarketingScene;
  modify_time?: string;
  name?: string;
  smart_bid_type?: CampaignGetV2DataListSmartBidType;
  status?: CampaignGetV2DataListStatus;
}

