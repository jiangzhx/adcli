// 由 oceanengine/ad_open_sdk_go models/model_local_project_week_schedule_update_v3_0_request_data_inner.go 生成
// 不要手动编辑。

import type { LocalProjectWeekScheduleUpdateV30DataScheduleScene } from "../models/index";

export interface LocalProjectWeekScheduleUpdateV30RequestDataInner {
  project_id: number | string;
  schedule_scene: LocalProjectWeekScheduleUpdateV30DataScheduleScene;
  schedule_time: string;
}

