// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingBidType, QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingQcpxMode } from "../models";

export interface QianchuanAwemeUniPromotionOrderCreateV10RequestDeliverySetting {
  amount: number;
  bid_type?: QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingBidType;
  delivery_time: number;
  qcpx_mode?: QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingQcpxMode;
  roi_goal?: number;
}

