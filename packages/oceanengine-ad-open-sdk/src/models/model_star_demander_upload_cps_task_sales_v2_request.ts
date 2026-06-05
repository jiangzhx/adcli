// 由 oceanengine/ad_open_sdk_go models/model_star_demander_upload_cps_task_sales_v2_request.go 生成
// 不要手动编辑。

import type { StarDemanderUploadCpsTaskSalesV2RequestSalesInner } from "../models/index";

export interface StarDemanderUploadCpsTaskSalesV2Request {
  sales?: StarDemanderUploadCpsTaskSalesV2RequestSalesInner[];
  star_id: number | string;
  task_id: number | string;
  type: number;
}

