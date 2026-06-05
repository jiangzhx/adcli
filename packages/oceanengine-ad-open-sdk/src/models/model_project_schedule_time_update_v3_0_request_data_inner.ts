// 由 oceanengine/ad_open_sdk_go models/model_project_schedule_time_update_v3_0_request_data_inner.go 生成
// 不要手动编辑。

import type { ProjectScheduleTimeUpdateV30DataScheduleType } from "../models/index";

export interface ProjectScheduleTimeUpdateV30RequestDataInner {
  end_time?: number;
  project_id: number | string;
  schedule_type: ProjectScheduleTimeUpdateV30DataScheduleType;
}

