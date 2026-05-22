// Generated from tencentad/marketing-api-go-sdk pkg/model/model_pages_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PagesGetResponseData } from "../model/index";

export interface PagesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PagesGetResponseData;
}

