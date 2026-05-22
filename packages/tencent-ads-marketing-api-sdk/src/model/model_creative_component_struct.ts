// Generated from tencentad/marketing-api-go-sdk pkg/model/model_creative_component_struct.go
// Do not edit manually.

import type { AdStatus, CreativeComponentAuditStatus, CreativeComponentSpecStruct, CreativeComponentType, PromotedObjectSpec, PromotedObjectType } from "../model/index";

export interface CreativeComponentStruct {
  account_id?: number | string;
  component_name?: string;
  component_id?: number | string;
  component_type?: CreativeComponentType;
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  promoted_object_name?: string;
  status?: AdStatus;
  audit_status?: CreativeComponentAuditStatus;
  audit_msg?: string;
  component_spec?: CreativeComponentSpecStruct;
  promoted_object_spec?: PromotedObjectSpec;
  created_time?: number;
  last_modified_time?: number;
  is_publish_enabled?: boolean;
}

