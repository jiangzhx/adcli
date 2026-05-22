// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoAccessoryInner, BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoProjectInfo, BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoSubjectInfo } from "../models";

export interface BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfo {
  accessory?: BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoAccessoryInner[];
  project_id?: string;
  project_info?: BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoProjectInfo;
  subject_id?: string;
  subject_info?: BrandCampaignGetV30ResponseDataCampaignsInnerAuthenticationInfoSubjectInfo;
}

