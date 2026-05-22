// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_components_add_request.go
// Do not edit manually.

import type { ComponentSubType, ComponentValue } from "../v3/index";

export interface ComponentsAddRequest {
  account_id?: number | string;
  component_custom_name?: string;
  component_value?: ComponentValue;
  component_sub_type?: ComponentSubType;
  organization_id?: number | string;
}

