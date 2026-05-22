// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wildcards_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WildcardsGetResponseData } from "../v3/index";

export interface WildcardsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WildcardsGetResponseData;
}

