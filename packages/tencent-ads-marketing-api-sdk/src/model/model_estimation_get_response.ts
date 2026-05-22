// Generated from tencentad/marketing-api-go-sdk pkg/model/model_estimation_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, EstimationGetResponseData } from "../model/index";

export interface EstimationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: EstimationGetResponseData;
}

