// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_ad_label_get_response.go
// Do not edit manually.

import type { AdLabelGetResponseData, ApiErrorStruct } from "../v3/index";

export interface AdLabelGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdLabelGetResponseData;
}

