// Generated from tencentad/marketing-api-go-sdk pkg/model/model_custom_tags_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, CustomTagsGetResponseData } from "../model/index";

export interface CustomTagsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CustomTagsGetResponseData;
}

