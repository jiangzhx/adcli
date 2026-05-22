// Generated from tencentad/marketing-api-go-sdk pkg/model/model_promoted_objects_authorize_request.go
// Do not edit manually.

import type { AuthSpec, PromotedObjectType } from "../model/index";

export interface PromotedObjectsAuthorizeRequest {
  account_id?: number | string;
  promoted_object_type?: PromotedObjectType;
  promoted_object_name?: string;
  auth_spec?: AuthSpec;
  auth_begin_date?: number;
  auth_ttl?: number;
}

