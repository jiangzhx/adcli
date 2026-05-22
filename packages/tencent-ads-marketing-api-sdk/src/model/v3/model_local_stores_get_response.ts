// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_local_stores_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LocalStoresGetResponseData } from "../v3/index";

export interface LocalStoresGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LocalStoresGetResponseData;
}

