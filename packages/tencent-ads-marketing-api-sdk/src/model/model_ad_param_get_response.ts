// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_param_get_response.go
// Do not edit manually.

import type { AdParamGetResponseData, ApiErrorStruct } from "../model/index";

export interface AdParamGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdParamGetResponseData;
}

