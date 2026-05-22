// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_campaign_list_get_v1_0_filter.go
// Do not edit manually.

import type { QianchuanCampaignListGetV10FilterMarketingGoal, QianchuanCampaignListGetV10FilterMarketingScene, QianchuanCampaignListGetV10FilterStatus } from "../models/index";

export interface QianchuanCampaignListGetV10Filter {
  ids?: number | string[];
  marketing_goal: QianchuanCampaignListGetV10FilterMarketingGoal;
  marketing_scene?: QianchuanCampaignListGetV10FilterMarketingScene;
  name?: string;
  status?: QianchuanCampaignListGetV10FilterStatus;
}

