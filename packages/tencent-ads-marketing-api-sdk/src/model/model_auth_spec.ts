// Generated from tencentad/marketing-api-go-sdk pkg/model/model_auth_spec.go
// Do not edit manually.

import type { Certification, PromotedObjectAuthRelationship, WechatAuthScope } from "../model/index";

export interface AuthSpec {
  certification_list?: Certification[];
  relationship?: PromotedObjectAuthRelationship;
  auth_scope?: WechatAuthScope;
}

