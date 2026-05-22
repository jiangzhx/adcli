// Generated from tencentad/marketing-api-go-sdk pkg/model/model_custom_tags_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, CustomTagsAddResponseData } from "../model/index";

export interface CustomTagsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CustomTagsAddResponseData;
}

