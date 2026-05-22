// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_label_get_response.go
// Do not edit manually.

import type { AdLabelGetResponseData, ApiErrorStruct } from "../model/index";

export interface AdLabelGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdLabelGetResponseData;
}

