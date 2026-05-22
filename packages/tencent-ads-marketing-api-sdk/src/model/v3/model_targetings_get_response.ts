// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_targetings_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, TargetingsGetResponseData } from "../v3/index";

export interface TargetingsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: TargetingsGetResponseData;
}

