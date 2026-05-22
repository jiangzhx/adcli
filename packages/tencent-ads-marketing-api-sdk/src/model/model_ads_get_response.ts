// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ads_get_response.go
// Do not edit manually.

import type { AdsGetResponseData, ApiErrorStruct } from "../model/index";

export interface AdsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdsGetResponseData;
}

