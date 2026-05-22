// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_get_request.go
// Do not edit manually.

import type { FilteringStruct } from "../model/index";

export interface BidwordGetRequest {
  account_id?: number | string;
  filtering?: FilteringStruct[];
  page?: number;
  page_size?: number;
  is_deleted?: boolean;
}

