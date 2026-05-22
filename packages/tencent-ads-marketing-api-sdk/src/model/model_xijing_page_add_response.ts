// Generated from tencentad/marketing-api-go-sdk pkg/model/model_xijing_page_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, CreatePageResponse } from "../model/index";

export interface XijingPageAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CreatePageResponse[];
}

