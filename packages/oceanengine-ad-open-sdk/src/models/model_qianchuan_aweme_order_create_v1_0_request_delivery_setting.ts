// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_order_create_v1_0_request_delivery_setting.go
// Do not edit manually.

import type { QianchuanAwemeOrderCreateV10DeliverySettingBidMode, QianchuanAwemeOrderCreateV10DeliverySettingBidType, QianchuanAwemeOrderCreateV10DeliverySettingExternalAction, QianchuanAwemeOrderCreateV10DeliverySettingLiveroomHeatMode } from "../models/index";

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

