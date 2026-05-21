// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAwemeOrderDetailGetV10DataDeliverySettingBidMode, QianchuanAwemeOrderDetailGetV10DataDeliverySettingBidType, QianchuanAwemeOrderDetailGetV10DataDeliverySettingExternalAction, QianchuanAwemeOrderDetailGetV10DataDeliverySettingLiveroomHeatMode } from "../models";

export interface QianchuanAwemeOrderDetailGetV10ResponseDataDeliverySetting {
  amount?: number;
  bid_mode?: QianchuanAwemeOrderDetailGetV10DataDeliverySettingBidMode;
  bid_type?: QianchuanAwemeOrderDetailGetV10DataDeliverySettingBidType;
  cpa_bid?: number;
  delivery_time?: number;
  external_action?: QianchuanAwemeOrderDetailGetV10DataDeliverySettingExternalAction;
  liveroom_heat_mode?: QianchuanAwemeOrderDetailGetV10DataDeliverySettingLiveroomHeatMode;
  payment_amount?: number;
  roi_goal?: number;
}

