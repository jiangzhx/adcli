// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanUniPromotionListV10DataAdListAdInfoAdlabScene, QianchuanUniPromotionListV10DataAdListAdInfoBudgetMode, QianchuanUniPromotionListV10DataAdListAdInfoDeepExternalAction, QianchuanUniPromotionListV10DataAdListAdInfoMarketingGoal, QianchuanUniPromotionListV10DataAdListAdInfoMarketingServicesMode, QianchuanUniPromotionListV10DataAdListAdInfoOptStatus, QianchuanUniPromotionListV10DataAdListAdInfoSmartBidType, QianchuanUniPromotionListV10DataAdListAdInfoStatus, QianchuanUniPromotionListV10ResponseDataAdListInnerAdInfoCompensateInfo } from "../models";

export interface QianchuanUniPromotionListV10ResponseDataAdListInnerAdInfo {
  adlab_scene?: QianchuanUniPromotionListV10DataAdListAdInfoAdlabScene;
  budget?: number;
  budget_mode?: QianchuanUniPromotionListV10DataAdListAdInfoBudgetMode;
  compensate_info?: QianchuanUniPromotionListV10ResponseDataAdListInnerAdInfoCompensateInfo;
  create_time?: string;
  daily_delivery_time?: number;
  deep_external_action?: QianchuanUniPromotionListV10DataAdListAdInfoDeepExternalAction;
  delivery_seconds?: number;
  end_time?: string;
  id?: number;
  marketing_goal?: QianchuanUniPromotionListV10DataAdListAdInfoMarketingGoal;
  marketing_services_mode?: QianchuanUniPromotionListV10DataAdListAdInfoMarketingServicesMode;
  modify_time?: string;
  name?: string;
  opt_status?: QianchuanUniPromotionListV10DataAdListAdInfoOptStatus;
  roi2_goal?: number;
  smart_bid_type?: QianchuanUniPromotionListV10DataAdListAdInfoSmartBidType;
  start_time?: string;
  status?: QianchuanUniPromotionListV10DataAdListAdInfoStatus;
}

