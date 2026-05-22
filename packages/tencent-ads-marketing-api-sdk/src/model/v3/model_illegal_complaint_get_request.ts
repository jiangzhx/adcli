// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_illegal_complaint_get_request.go
// Do not edit manually.

import type { IllegalDateRange } from "../v3/index";

export interface IllegalComplaintGetRequest {
  account_id_list?: number[];
  illegal_level_list?: number[];
  action_type_list?: number[];
  illegal_reason?: string;
  illegal_date_range?: IllegalDateRange;
  page?: number;
  page_size?: number;
}

