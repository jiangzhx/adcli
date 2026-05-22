// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniAwemeAdCreateV10DeliverySettingDeepExternalAction, QianchuanUniAwemeAdCreateV10DeliverySettingLiveScheduleType, QianchuanUniAwemeAdCreateV10DeliverySettingQcpxMode, QianchuanUniAwemeAdCreateV10DeliverySettingSmartBidType, QianchuanUniAwemeAdCreateV10DeliverySettingVideoScheduleType } from "../models";

export interface QianchuanUniAwemeAdCreateV10RequestDeliverySetting {
  budget: number;
  daily_delivery_time?: number;
  deep_external_action?: QianchuanUniAwemeAdCreateV10DeliverySettingDeepExternalAction;
  end_time?: string;
  estimate_convert?: number;
  estimate_roi_goal?: number;
  live_schedule_type?: QianchuanUniAwemeAdCreateV10DeliverySettingLiveScheduleType;
  min_estimate_convert?: number;
  min_estimate_roi_goal?: number;
  qcpx_mode?: QianchuanUniAwemeAdCreateV10DeliverySettingQcpxMode;
  roi2_goal?: number;
  smart_bid_type: QianchuanUniAwemeAdCreateV10DeliverySettingSmartBidType;
  start_time?: string;
  video_schedule_type?: QianchuanUniAwemeAdCreateV10DeliverySettingVideoScheduleType;
}

