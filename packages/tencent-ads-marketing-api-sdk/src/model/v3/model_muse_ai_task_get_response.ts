// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_muse_ai_task_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, MuseAiTaskGetResponseData } from "../v3/index";

export interface MuseAiTaskGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: MuseAiTaskGetResponseData;
}

