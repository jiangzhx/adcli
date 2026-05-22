// Generated from tencentad/marketing-api-go-sdk pkg/model/model_promoted_objects_authorize_response.go
// Do not edit manually.

import type { ApiErrorStruct, PromotedObjectsAuthorizeResponseData } from "../model/index";

export interface PromotedObjectsAuthorizeResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PromotedObjectsAuthorizeResponseData;
}

