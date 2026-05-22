// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_pages_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PagesGetResponseData } from "../v3/index";

export interface PagesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PagesGetResponseData;
}

