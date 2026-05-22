// Generated from oceanengine/ad_open_sdk_go models/model_tools_privative_word_get_v2_response_data.go
// Do not edit manually.

import type { ToolsPrivativeWordGetV2ResponseDataAdsPrivativeInner, ToolsPrivativeWordGetV2ResponseDataCampaignsPrivativeInner } from "../models/index";

export interface ToolsPrivativeWordGetV2ResponseData {
  ad_error_list?: number[];
  ads_privative?: ToolsPrivativeWordGetV2ResponseDataAdsPrivativeInner[];
  campaign_error_list?: number[];
  campaigns_privative?: ToolsPrivativeWordGetV2ResponseDataCampaignsPrivativeInner[];
}

