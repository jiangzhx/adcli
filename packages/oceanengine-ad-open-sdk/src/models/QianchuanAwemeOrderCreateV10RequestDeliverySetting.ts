// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeOrderCreateV10DeliverySettingBidMode, QianchuanAwemeOrderCreateV10DeliverySettingBidType, QianchuanAwemeOrderCreateV10DeliverySettingExternalAction, QianchuanAwemeOrderCreateV10DeliverySettingLiveroomHeatMode } from "../models";

export interface QianchuanAwemeOrderCreateV10RequestDeliverySetting {
  amount: number;
  bid_mode: QianchuanAwemeOrderCreateV10DeliverySettingBidMode;
  bid_type?: QianchuanAwemeOrderCreateV10DeliverySettingBidType;
  cpa_bid?: number;
  delivery_time: number;
  external_action: QianchuanAwemeOrderCreateV10DeliverySettingExternalAction;
  liveroom_heat_mode?: QianchuanAwemeOrderCreateV10DeliverySettingLiveroomHeatMode;
  roi_goal?: number;
}

