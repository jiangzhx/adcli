// Generated from oceanengine/ad_open_sdk_go models/model_star_demander_query_cps_task_sales_v2_response_data.go
// Do not edit manually.

import type { StarDemanderQueryCpsTaskSalesV2ResponseDataSalesInner } from "../models/index";

export interface StarDemanderQueryCpsTaskSalesV2ResponseData {
  has_more: boolean;
  sales: StarDemanderQueryCpsTaskSalesV2ResponseDataSalesInner[];
  star_id: number | string;
  task_id: number | string;
}

