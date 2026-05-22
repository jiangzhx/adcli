// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandCampaignGetV30DataCampaignsCampaignCategory, BrandCampaignGetV30DataCampaignsCampaignStatus, BrandCampaignGetV30DataCampaignsContractType, BrandCampaignGetV30DataCampaignsMarketingPurpose, BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfo } from "../models";

export interface BrandCampaignGetV30ResponseDataCampaignsInner {
  ads_budget?: number;
  advertiser_id?: number;
  authentication_info?: BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfo;
  campaign_category?: BrandCampaignGetV30DataCampaignsCampaignCategory;
  campaign_id?: number;
  campaign_name?: string;
  campaign_status?: BrandCampaignGetV30DataCampaignsCampaignStatus;
  cart_id?: number;
  contract_type?: BrandCampaignGetV30DataCampaignsContractType;
  create_time?: string;
  end_time?: string;
  marketing_purpose?: BrandCampaignGetV30DataCampaignsMarketingPurpose;
  modify_time?: string;
  start_time?: string;
}

