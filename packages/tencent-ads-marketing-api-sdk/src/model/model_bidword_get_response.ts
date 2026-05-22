// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, BidwordGetResponseData } from "../model/index";

export interface BidwordGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BidwordGetResponseData;
}

