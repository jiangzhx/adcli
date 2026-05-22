// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_list_v1_0_response_data_ad_list_inner_ad_info.go
// Do not edit manually.

import type { QianchuanUniPromotionListV10DataAdListAdInfoAdlabScene, QianchuanUniPromotionListV10DataAdListAdInfoBudgetMode, QianchuanUniPromotionListV10DataAdListAdInfoDeepExternalAction, QianchuanUniPromotionListV10DataAdListAdInfoMarketingGoal, QianchuanUniPromotionListV10DataAdListAdInfoMarketingServicesMode, QianchuanUniPromotionListV10DataAdListAdInfoOptStatus, QianchuanUniPromotionListV10DataAdListAdInfoSmartBidType, QianchuanUniPromotionListV10DataAdListAdInfoStatus, QianchuanUniPromotionListV10ResponseDataAdListInnerAdInfoCompensateInfo } from "../models/index";

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
  id?: number | string;
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

