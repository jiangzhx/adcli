// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ads_update_response.go
// Do not edit manually.

import type { AdsUpdateResponseData, ApiErrorStruct } from "../model/index";

export interface AdsUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdsUpdateResponseData;
}

