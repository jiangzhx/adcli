// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdGetV10DataListDeliverySettingBudgetMode, QianchuanAdGetV10DataListDeliverySettingDeepBidType, QianchuanAdGetV10DataListDeliverySettingDeepExternalAction, QianchuanAdGetV10DataListDeliverySettingExternalAction, QianchuanAdGetV10DataListDeliverySettingQcpxMode, QianchuanAdGetV10DataListDeliverySettingSmartBidType } from "../models";

export interface QianchuanAdGetV10ResponseDataListInnerDeliverySetting {
  allow_qcpx?: boolean;
  budget?: number;
  budget_mode?: QianchuanAdGetV10DataListDeliverySettingBudgetMode;
  cpa_bid?: number;
  deep_bid_type?: QianchuanAdGetV10DataListDeliverySettingDeepBidType;
  deep_cpa_bid?: number;
  deep_external_action?: QianchuanAdGetV10DataListDeliverySettingDeepExternalAction;
  end_time?: string;
  external_action?: QianchuanAdGetV10DataListDeliverySettingExternalAction;
  product_new_open?: boolean;
  qcpx_mode?: QianchuanAdGetV10DataListDeliverySettingQcpxMode;
  revive_budget?: number;
  roi_goal?: number;
  smart_bid_type?: QianchuanAdGetV10DataListDeliverySettingSmartBidType;
  start_time?: string;
}

