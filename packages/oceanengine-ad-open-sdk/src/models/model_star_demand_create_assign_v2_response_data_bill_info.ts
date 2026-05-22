// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_create_assign_v2_response_data_bill_info.go
// Do not edit manually.

import type { StarDemandCreateAssignV2ResponseDataBillInfoOrderBillListInner } from "../models/index";

export interface StarDemandCreateAssignV2ResponseDataBillInfo {
  balance?: number;
  order_bill_list?: StarDemandCreateAssignV2ResponseDataBillInfoOrderBillListInner[];
  precise_balance?: number;
  precise_total_amount?: number;
  precise_total_platform_fee?: number;
  precise_total_remaining?: number;
  precise_total_task_cost?: number;
  total_amount?: number;
  total_platform_fee?: number;
  total_remaining?: number;
  total_task_cost?: number;
}

