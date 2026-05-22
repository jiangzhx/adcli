// Generated from tencentad/marketing-api-go-sdk pkg/model/model_promoted_object_authorization_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, PromotedObjectAuthorizationAddResponseData } from "../model/index";

export interface PromotedObjectAuthorizationAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PromotedObjectAuthorizationAddResponseData;
}

