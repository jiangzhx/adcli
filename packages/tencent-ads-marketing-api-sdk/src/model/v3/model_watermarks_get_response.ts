// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_watermarks_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WatermarksGetResponseData } from "../v3/index";

export interface WatermarksGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WatermarksGetResponseData;
}

