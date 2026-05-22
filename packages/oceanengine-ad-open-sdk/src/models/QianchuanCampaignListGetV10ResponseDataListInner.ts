// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanCampaignListGetV10DataListBudgetMode, QianchuanCampaignListGetV10DataListMarketingGoal, QianchuanCampaignListGetV10DataListMarketingScene, QianchuanCampaignListGetV10DataListStatus } from "../models";

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

