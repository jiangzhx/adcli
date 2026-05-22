// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_estimation_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, EstimationGetResponseData } from "../v3/index";

export interface EstimationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: EstimationGetResponseData;
}

