// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdGetV10FilteringAutoManageFilter, QianchuanAdGetV10FilteringCampaignScene, QianchuanAdGetV10FilteringMarketingGoal, QianchuanAdGetV10FilteringMarketingScene, QianchuanAdGetV10FilteringStatus } from "../models";

export interface QianchuanAdGetV10Filtering {
  ad_create_end_date?: string;
  ad_create_start_date?: string;
  ad_modify_time?: string;
  ad_name?: string;
  auto_manage_filter?: QianchuanAdGetV10FilteringAutoManageFilter;
  aweme_id?: number;
  campaign_id?: number;
  campaign_scene?: QianchuanAdGetV10FilteringCampaignScene[];
  ids?: number[];
  marketing_goal: QianchuanAdGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanAdGetV10FilteringMarketingScene;
  status?: QianchuanAdGetV10FilteringStatus;
}

