// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarBillGetPendingV2ResponseDataOrderBillListInner } from "../models";

export interface StarBillGetPendingV2ResponseData {
  balance?: number;
  order_bill_list?: StarBillGetPendingV2ResponseDataOrderBillListInner[];
  precise_balance?: number;
  precise_total_pay?: number;
  precise_total_platform_fee?: number;
  precise_total_remaining?: number;
  precise_total_task_cost?: number;
  total_pay?: number;
  total_platform_fee?: number;
  total_remaining?: number;
  total_task_cost?: number;
}

