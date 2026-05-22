// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ads_delete_response.go
// Do not edit manually.

import type { AdsDeleteResponseData, ApiErrorStruct } from "../model/index";

export interface AdsDeleteResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdsDeleteResponseData;
}

