// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanReportLongTransferOrderGetV10DataListIsPay, QianchuanReportLongTransferOrderGetV10DataListOrderFlowSource, QianchuanReportLongTransferOrderGetV10DataListPayType } from "../models";

export interface QianchuanReportLongTransferOrderGetV10ResponseDataListInner {
  ad_id?: number;
  ad_name?: string;
  is_pay?: QianchuanReportLongTransferOrderGetV10DataListIsPay;
  order_amount?: number;
  order_flow_source?: QianchuanReportLongTransferOrderGetV10DataListOrderFlowSource;
  order_id?: number;
  order_place_time?: string;
  pay_type?: QianchuanReportLongTransferOrderGetV10DataListPayType;
}

