// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionAdControlTaskListV10DataTaskListSmartBidType, QianchuanUniPromotionAdControlTaskListV10DataTaskListTaskStatus, QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerAudience, QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerMaterialListInner, QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerMetrics, QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerRoomInfo } from "../models";

export interface QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInner {
  audience?: QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerAudience;
  bid?: number;
  budget?: number;
  create_time?: string;
  deep_external_action_name?: string;
  duration?: number;
  external_action_name?: string;
  id?: number;
  material_list?: QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerMaterialListInner[];
  metrics?: QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerMetrics;
  name?: string;
  roi2_goal?: number;
  room_info?: QianchuanUniPromotionAdControlTaskListV10ResponseDataTaskListInnerRoomInfo;
  smart_bid_type?: QianchuanUniPromotionAdControlTaskListV10DataTaskListSmartBidType;
  task_status?: QianchuanUniPromotionAdControlTaskListV10DataTaskListTaskStatus;
}

