// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanAdGetV10FilteringAutoManageFilter, QianchuanAdGetV10FilteringCampaignScene, QianchuanAdGetV10FilteringMarketingGoal, QianchuanAdGetV10FilteringMarketingScene, QianchuanAdGetV10FilteringStatus } from "../models/index";

export interface QianchuanAdGetV10Filtering {
  ad_create_end_date?: string;
  ad_create_start_date?: string;
  ad_modify_time?: string;
  ad_name?: string;
  auto_manage_filter?: QianchuanAdGetV10FilteringAutoManageFilter;
  aweme_id?: number | string;
  campaign_id?: number | string;
  campaign_scene?: QianchuanAdGetV10FilteringCampaignScene[];
  ids?: (number | string)[];
  marketing_goal: QianchuanAdGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanAdGetV10FilteringMarketingScene;
  status?: QianchuanAdGetV10FilteringStatus;
}

