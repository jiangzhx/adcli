// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, BidwordAddResponseData } from "../model/index";

export interface BidwordAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BidwordAddResponseData;
}

