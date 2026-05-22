// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_aweme_ad_update_v1_0_request_delivery_setting.go
// Do not edit manually.

import type { QianchuanUniAwemeAdUpdateV10DeliverySettingDeepExternalAction, QianchuanUniAwemeAdUpdateV10DeliverySettingLiveScheduleType, QianchuanUniAwemeAdUpdateV10DeliverySettingQcpxMode, QianchuanUniAwemeAdUpdateV10DeliverySettingVideoScheduleType } from "../models/index";

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

