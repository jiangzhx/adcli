// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_delete_response.go
// Do not edit manually.

import type { ApiErrorStruct, BidwordDeleteResponseData } from "../model/index";

export interface BidwordDeleteResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BidwordDeleteResponseData;
}

