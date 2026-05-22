// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_comment_list_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, CommentListGetResponseData } from "../v3/index";

export interface CommentListGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CommentListGetResponseData;
}

