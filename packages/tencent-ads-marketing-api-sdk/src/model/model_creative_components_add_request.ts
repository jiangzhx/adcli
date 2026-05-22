// Generated from tencentad/marketing-api-go-sdk pkg/model/model_creative_components_add_request.go
// Do not edit manually.

import type { CreativeComponentSpecStruct, CreativeComponentType, PromotedObjectType } from "../model/index";

export interface CreativeComponentsAddRequest {
  account_id?: number | string;
  component_name?: string;
  component_type?: CreativeComponentType;
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  component_spec?: CreativeComponentSpecStruct;
}

