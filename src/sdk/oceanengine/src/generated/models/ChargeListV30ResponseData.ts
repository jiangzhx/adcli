// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ChargeListV30ResponseDataChargeListInner, ChargeListV30ResponseDataPageInfo } from "../models";

export interface ChargeListV30ResponseData {
  charge_list?: ChargeListV30ResponseDataChargeListInner[];
  page_info?: ChargeListV30ResponseDataPageInfo;
  total_amount?: number;
  total_cancel_amount?: number;
  total_charge_amount?: number;
}

