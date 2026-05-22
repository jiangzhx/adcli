// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_uni_promotion_order_create_v1_0_request_delivery_setting.go
// Do not edit manually.

import type { QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingBidType, QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingQcpxMode } from "../models/index";

export interface QianchuanAwemeUniPromotionOrderCreateV10RequestDeliverySetting {
  amount: number;
  bid_type?: QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingBidType;
  delivery_time: number;
  qcpx_mode?: QianchuanAwemeUniPromotionOrderCreateV10DeliverySettingQcpxMode;
  roi_goal?: number;
}

