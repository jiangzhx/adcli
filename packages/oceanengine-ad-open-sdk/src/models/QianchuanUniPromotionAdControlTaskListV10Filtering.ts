// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionAdControlTaskListV10FilteringExternalAction, QianchuanUniPromotionAdControlTaskListV10FilteringHavingCost, QianchuanUniPromotionAdControlTaskListV10FilteringSmartBidType, QianchuanUniPromotionAdControlTaskListV10FilteringTaskStatus } from "../models";

export interface QianchuanUniPromotionAdControlTaskListV10Filtering {
  create_end_time?: string;
  create_start_time?: string;
  external_action?: QianchuanUniPromotionAdControlTaskListV10FilteringExternalAction;
  having_cost?: QianchuanUniPromotionAdControlTaskListV10FilteringHavingCost;
  search_keyword?: string;
  smart_bid_type?: QianchuanUniPromotionAdControlTaskListV10FilteringSmartBidType;
  task_status?: QianchuanUniPromotionAdControlTaskListV10FilteringTaskStatus;
}

