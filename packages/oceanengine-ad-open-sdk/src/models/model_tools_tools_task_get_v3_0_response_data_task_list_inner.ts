// 由 oceanengine/ad_open_sdk_go models/model_tools_tools_task_get_v3_0_response_data_task_list_inner.go 生成
// 不要手动编辑。

import type { ToolsToolsTaskGetV30DataTaskListTaskStatus } from "../models/index";

export interface ToolsToolsTaskGetV30ResponseDataTaskListInner {
  create_time?: string;
  task_id?: number | string;
  task_name?: string;
  task_status?: ToolsToolsTaskGetV30DataTaskListTaskStatus;
}

