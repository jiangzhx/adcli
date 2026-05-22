// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeEstimateProfitV10DeliverySettingBidMode, QianchuanAwemeEstimateProfitV10DeliverySettingBidType, QianchuanAwemeEstimateProfitV10DeliverySettingExternalAction } from "../models";

export interface QianchuanAwemeEstimateProfitV10DeliverySetting {
  amount: number;
  bid_mode: QianchuanAwemeEstimateProfitV10DeliverySettingBidMode;
  bid_type?: QianchuanAwemeEstimateProfitV10DeliverySettingBidType;
  cpa_bid?: number;
  external_action: QianchuanAwemeEstimateProfitV10DeliverySettingExternalAction;
  pay_roi?: number;
}

