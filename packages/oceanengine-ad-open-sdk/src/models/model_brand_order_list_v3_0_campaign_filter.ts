// 由 oceanengine/ad_open_sdk_go models/model_brand_order_list_v3_0_campaign_filter.go 生成
// 不要手动编辑。

import type { BrandOrderListV30CampaignFilterCampaignStatus } from "../models/index";

export interface BrandOrderListV30CampaignFilter {
  campaign_id?: string;
  campaign_name?: string;
  campaign_status?: BrandOrderListV30CampaignFilterCampaignStatus[];
  create_end_time?: string;
  create_start_time?: string;
  end_time?: string;
  start_time?: string;
}

