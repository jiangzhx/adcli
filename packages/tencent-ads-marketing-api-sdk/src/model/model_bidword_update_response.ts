// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, BidwordUpdateResponseData } from "../model/index";

export interface BidwordUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BidwordUpdateResponseData;
}

