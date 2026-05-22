// Generated from oceanengine/ad_open_sdk_go models/model_star_bill_get_pending_v2_response_data.go
// Do not edit manually.

import type { StarBillGetPendingV2ResponseDataOrderBillListInner } from "../models/index";

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

