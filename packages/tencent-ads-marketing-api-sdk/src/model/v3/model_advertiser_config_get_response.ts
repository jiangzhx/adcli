// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_advertiser_config_get_response.go
// Do not edit manually.

import type { AdvertiserConfigGetResponseData, ApiErrorStruct } from "../v3/index";

export interface AdvertiserConfigGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdvertiserConfigGetResponseData;
}

