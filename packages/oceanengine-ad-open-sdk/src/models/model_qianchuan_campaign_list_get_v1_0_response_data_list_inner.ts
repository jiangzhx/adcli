// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_campaign_list_get_v1_0_response_data_list_inner.go
// Do not edit manually.

import type { QianchuanCampaignListGetV10DataListBudgetMode, QianchuanCampaignListGetV10DataListMarketingGoal, QianchuanCampaignListGetV10DataListMarketingScene, QianchuanCampaignListGetV10DataListStatus } from "../models/index";

export interface QianchuanCampaignListGetV10ResponseDataListInner {
  budget?: number;
  budget_mode: QianchuanCampaignListGetV10DataListBudgetMode;
  create_date?: string;
  id: number | string;
  marketing_goal: QianchuanCampaignListGetV10DataListMarketingGoal;
  marketing_scene?: QianchuanCampaignListGetV10DataListMarketingScene;
  name: string;
  status: QianchuanCampaignListGetV10DataListStatus;
}

