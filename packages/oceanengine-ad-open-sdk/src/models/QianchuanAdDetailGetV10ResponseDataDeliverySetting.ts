// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataDeliverySettingBudgetMode, QianchuanAdDetailGetV10DataDeliverySettingDeepBidType, QianchuanAdDetailGetV10DataDeliverySettingDeepExternalAction, QianchuanAdDetailGetV10DataDeliverySettingEnableAutoPause, QianchuanAdDetailGetV10DataDeliverySettingEnableFollowMaterial, QianchuanAdDetailGetV10DataDeliverySettingExternalAction, QianchuanAdDetailGetV10DataDeliverySettingLiveScheduleType, QianchuanAdDetailGetV10DataDeliverySettingQcpxMode, QianchuanAdDetailGetV10DataDeliverySettingSmartBidType, QianchuanAdDetailGetV10DataDeliverySettingVideoScheduleType } from "../models";

export interface QianchuanAdDetailGetV10ResponseDataDeliverySetting {
  allow_qcpx?: boolean;
  auto_manage_strategy_cmd?: number;
  budget?: number;
  budget_mode?: QianchuanAdDetailGetV10DataDeliverySettingBudgetMode;
  cpa_bid?: number;
  deep_bid_type?: QianchuanAdDetailGetV10DataDeliverySettingDeepBidType;
  deep_cpa_bid?: number;
  deep_external_action?: QianchuanAdDetailGetV10DataDeliverySettingDeepExternalAction;
  enable_auto_pause?: QianchuanAdDetailGetV10DataDeliverySettingEnableAutoPause;
  enable_follow_material?: QianchuanAdDetailGetV10DataDeliverySettingEnableFollowMaterial;
  end_time?: string;
  external_action?: QianchuanAdDetailGetV10DataDeliverySettingExternalAction;
  grab_first_screen_bid_adjust_rate?: number;
  grab_first_screen_switch?: boolean;
  live_schedule_type?: QianchuanAdDetailGetV10DataDeliverySettingLiveScheduleType;
  product_new_open?: boolean;
  qcpx_mode?: QianchuanAdDetailGetV10DataDeliverySettingQcpxMode;
  revive_budget?: number;
  roi_goal?: number;
  schedule_fixed_range?: number;
  schedule_time?: string;
  smart_bid_type?: QianchuanAdDetailGetV10DataDeliverySettingSmartBidType;
  start_time?: string;
  video_schedule_type?: QianchuanAdDetailGetV10DataDeliverySettingVideoScheduleType;
}

