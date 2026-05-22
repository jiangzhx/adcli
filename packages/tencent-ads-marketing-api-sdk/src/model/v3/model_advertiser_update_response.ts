// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_advertiser_update_response.go
// Do not edit manually.

import type { AdvertiserUpdateResponseData, ApiErrorStruct } from "../v3/index";

export interface AdvertiserUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdvertiserUpdateResponseData;
}

