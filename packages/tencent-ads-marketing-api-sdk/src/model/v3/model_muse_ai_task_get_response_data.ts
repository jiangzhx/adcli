// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_muse_ai_task_get_response_data.go
// Do not edit manually.

import type { MuseAiResultItem, MuseAiTaskStatus, MuseAiTaskType } from "../v3/index";

export interface MuseAiTaskGetResponseData {
  task_id?: number | string;
  task_type?: MuseAiTaskType;
  task_status?: MuseAiTaskStatus;
  results?: MuseAiResultItem[];
}

