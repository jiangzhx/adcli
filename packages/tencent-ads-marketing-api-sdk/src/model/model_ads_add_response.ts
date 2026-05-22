// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ads_add_response.go
// Do not edit manually.

import type { AdsAddResponseData, ApiErrorStruct } from "../model/index";

export interface AdsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdsAddResponseData;
}

