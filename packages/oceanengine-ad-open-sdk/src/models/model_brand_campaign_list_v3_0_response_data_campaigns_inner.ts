// Generated from oceanengine/ad_open_sdk_go models/model_brand_campaign_list_v3_0_response_data_campaigns_inner.go
// Do not edit manually.

import type { BrandCampaignListV30DataCampaignsCampaignStatus } from "../models/index";

export interface BrandCampaignListV30ResponseDataCampaignsInner {
  advertiser_id?: number | string;
  advertiser_name?: string;
  campaign_id?: number | string;
  campaign_name?: string;
  campaign_status?: BrandCampaignListV30DataCampaignsCampaignStatus;
  cart_id?: number | string;
  create_time?: string;
  end_time?: string;
  main_contract_id?: string;
  modify_time?: string;
  start_time?: string;
  total_sell_price?: string;
}

