// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_bidword_delete_response.go
// Do not edit manually.

import type { ApiErrorStruct, BidwordDeleteResponseData } from "../v3/index";

export interface BidwordDeleteResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: BidwordDeleteResponseData;
}

