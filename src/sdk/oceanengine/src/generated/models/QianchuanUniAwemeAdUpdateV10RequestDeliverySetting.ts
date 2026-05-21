// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanUniAwemeAdUpdateV10DeliverySettingDeepExternalAction, QianchuanUniAwemeAdUpdateV10DeliverySettingLiveScheduleType, QianchuanUniAwemeAdUpdateV10DeliverySettingQcpxMode, QianchuanUniAwemeAdUpdateV10DeliverySettingVideoScheduleType } from "../models";

export interface QianchuanUniAwemeAdUpdateV10RequestDeliverySetting {
  budget?: number;
  daily_delivery_time?: number;
  deep_external_action?: QianchuanUniAwemeAdUpdateV10DeliverySettingDeepExternalAction;
  end_time?: string;
  estimate_convert?: number;
  estimate_roi_goal?: number;
  live_schedule_type?: QianchuanUniAwemeAdUpdateV10DeliverySettingLiveScheduleType;
  min_estimate_convert?: number;
  min_estimate_roi_goal?: number;
  qcpx_mode?: QianchuanUniAwemeAdUpdateV10DeliverySettingQcpxMode;
  roi2_goal?: number;
  start_time?: string;
  video_schedule_type?: QianchuanUniAwemeAdUpdateV10DeliverySettingVideoScheduleType;
}

