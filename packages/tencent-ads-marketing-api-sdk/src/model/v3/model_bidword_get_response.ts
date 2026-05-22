// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_bidword_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, BidwordGetResponseData } from "../v3/index";

export interface BidwordGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BidwordGetResponseData;
}

