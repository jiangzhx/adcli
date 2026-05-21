// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdUpdateV10DeliverySettingLiveScheduleType, QianchuanAdUpdateV10DeliverySettingQcpxMode, QianchuanAdUpdateV10DeliverySettingVideoScheduleType } from "../models";

export interface QianchuanAdUpdateV10RequestDeliverySetting {
  budget: number;
  cpa_bid?: number;
  end_time?: string;
  grab_first_screen_bid_adjust_rate?: number;
  grab_first_screen_switch?: boolean;
  live_schedule_type?: QianchuanAdUpdateV10DeliverySettingLiveScheduleType;
  product_new_open?: boolean;
  qcpx_mode?: QianchuanAdUpdateV10DeliverySettingQcpxMode;
  roi_goal?: number;
  schedule_fixed_range?: number;
  schedule_time?: string;
  video_schedule_type?: QianchuanAdUpdateV10DeliverySettingVideoScheduleType;
}

