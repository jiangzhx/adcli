// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_advertiser_get_response.go
// Do not edit manually.

import type { AdvertiserGetResponseData, ApiErrorStruct } from "../v3/index";

export interface AdvertiserGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdvertiserGetResponseData;
}

