// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_barrage_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, BarrageAddResponseData } from "../v3/index";

export interface BarrageAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BarrageAddResponseData;
}

