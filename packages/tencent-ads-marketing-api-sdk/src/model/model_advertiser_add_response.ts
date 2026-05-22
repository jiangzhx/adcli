// Generated from tencentad/marketing-api-go-sdk pkg/model/model_advertiser_add_response.go
// Do not edit manually.

import type { AdvertiserAddResponseData, ApiErrorStruct } from "../model/index";

export interface AdvertiserAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdvertiserAddResponseData;
}

