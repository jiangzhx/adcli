// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalChargeListV30ResponseDataChargeListInner, LocalChargeListV30ResponseDataPageInfo } from "../models";

export interface LocalChargeListV30ResponseData {
  charge_list?: LocalChargeListV30ResponseDataChargeListInner[];
  page_info?: LocalChargeListV30ResponseDataPageInfo;
  total_amount?: number;
  total_cancel_amount?: number;
  total_charge_amount?: number;
}

