// Generated from oceanengine/ad_open_sdk_go models/model_brand_campaign_get_v3_0_response_data_campaigns_inner_authentication_info.go
// Do not edit manually.

import type { BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoAccessoryInner, BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoProjectInfo, BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoSubjectInfo } from "../models/index";

export interface BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfo {
  accessory?: BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoAccessoryInner[];
  project_id?: string;
  project_info?: BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoProjectInfo;
  subject_id?: string;
  subject_info?: BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoSubjectInfo;
}

