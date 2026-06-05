// 由 oceanengine/ad_open_sdk_go models/model_report_custom_async_task_create_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ReportCustomAsyncTaskCreateV30DataTaskStatus } from "../models/index";

export interface ReportCustomAsyncTaskCreateV30ResponseData {
  create_time?: string;
  task_id?: number | string;
  task_name?: string;
  task_status?: ReportCustomAsyncTaskCreateV30DataTaskStatus;
}

