// Generated from tencentad/marketing-api-go-sdk pkg/model/model_promoted_object_authorization_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PromotedObjectAuthorizationGetResponseData } from "../model/index";

export interface PromotedObjectAuthorizationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PromotedObjectAuthorizationGetResponseData;
}

