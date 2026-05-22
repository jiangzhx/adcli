// Generated from oceanengine/ad_open_sdk_go models/model_brand_campaign_list_v3_0_filter.go
// Do not edit manually.

import type { BrandCampaignListV30FilterCampaignStatus } from "../models/index";

export interface BrandCampaignListV30Filter {
  campaign_id?: string;
  campaign_name?: string;
  campaign_status?: BrandCampaignListV30FilterCampaignStatus[];
  create_end_time?: string;
  create_start_time?: string;
  end_time?: string;
  start_time?: string;
}

