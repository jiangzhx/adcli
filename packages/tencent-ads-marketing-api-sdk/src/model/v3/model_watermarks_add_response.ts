// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_watermarks_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WatermarksAddResponseData } from "../v3/index";

export interface WatermarksAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WatermarksAddResponseData;
}

