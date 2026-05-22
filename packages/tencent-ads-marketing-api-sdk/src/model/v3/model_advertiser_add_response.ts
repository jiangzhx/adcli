// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_advertiser_add_response.go
// Do not edit manually.

import type { AdvertiserAddResponseData, ApiErrorStruct } from "../v3/index";

export interface AdvertiserAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdvertiserAddResponseData;
}

