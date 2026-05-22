// Generated from tencentad/marketing-api-go-sdk pkg/model/model_local_stores_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LocalStoresGetResponseData } from "../model/index";

export interface LocalStoresGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LocalStoresGetResponseData;
}

