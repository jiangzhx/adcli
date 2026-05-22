// Generated from tencentad/marketing-api-go-sdk pkg/model/model_xijing_page_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, PageOperateResponses } from "../model/index";

export interface XijingPageUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PageOperateResponses[];
}

