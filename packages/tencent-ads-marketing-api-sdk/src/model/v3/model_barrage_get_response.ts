// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_barrage_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, BarrageGetResponseData } from "../v3/index";

export interface BarrageGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BarrageGetResponseData;
}

