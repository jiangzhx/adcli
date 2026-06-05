// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_uni_promotion_order_detail_v1_0_response_data_delivery_setting.go 生成
// 不要手动编辑。

import type { QianchuanAwemeUniPromotionOrderDetailV10DataDeliverySettingBidType, QianchuanAwemeUniPromotionOrderDetailV10DataDeliverySettingDeepExternalAction, QianchuanAwemeUniPromotionOrderDetailV10DataDeliverySettingQcpxMode } from "../models/index";

export interface QianchuanAwemeUniPromotionOrderDetailV10ResponseDataDeliverySetting {
  amount?: number;
  bid_type?: QianchuanAwemeUniPromotionOrderDetailV10DataDeliverySettingBidType;
  deep_external_action?: QianchuanAwemeUniPromotionOrderDetailV10DataDeliverySettingDeepExternalAction;
  delivery_time?: number;
  qcpx_mode?: QianchuanAwemeUniPromotionOrderDetailV10DataDeliverySettingQcpxMode;
  roi_goal?: number;
  support_add_budget?: boolean;
}

