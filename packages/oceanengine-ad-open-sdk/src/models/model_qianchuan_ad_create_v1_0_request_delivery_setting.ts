// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_create_v1_0_request_delivery_setting.go
// Do not edit manually.

import type { QianchuanAdCreateV10DeliverySettingBudgetMode, QianchuanAdCreateV10DeliverySettingDeepBidType, QianchuanAdCreateV10DeliverySettingDeepExternalAction, QianchuanAdCreateV10DeliverySettingExternalAction, QianchuanAdCreateV10DeliverySettingLiveScheduleType, QianchuanAdCreateV10DeliverySettingQcpxMode, QianchuanAdCreateV10DeliverySettingSmartBidType, QianchuanAdCreateV10DeliverySettingVideoScheduleType } from "../models/index";

export interface QianchuanAdCreateV10RequestDeliverySetting {
  budget: number;
  budget_mode: QianchuanAdCreateV10DeliverySettingBudgetMode;
  cpa_bid?: number;
  deep_bid_type?: QianchuanAdCreateV10DeliverySettingDeepBidType;
  deep_external_action?: QianchuanAdCreateV10DeliverySettingDeepExternalAction;
  end_time?: string;
  external_action: QianchuanAdCreateV10DeliverySettingExternalAction;
  grab_first_screen_bid_adjust_rate?: number;
  grab_first_screen_switch?: boolean;
  live_schedule_type?: QianchuanAdCreateV10DeliverySettingLiveScheduleType;
  product_new_open?: boolean;
  qcpx_mode?: QianchuanAdCreateV10DeliverySettingQcpxMode;
  roi_goal?: number;
  schedule_fixed_range?: number;
  schedule_time?: string;
  smart_bid_type: QianchuanAdCreateV10DeliverySettingSmartBidType;
  start_time?: string;
  video_schedule_type?: QianchuanAdCreateV10DeliverySettingVideoScheduleType;
}

