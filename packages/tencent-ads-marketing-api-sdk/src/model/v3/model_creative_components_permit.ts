// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_creative_components_permit.go
// Do not edit manually.

import type { ComponentSubTypeOption, ComponentType, CreativeComponentValid } from "../v3/index";

export interface CreativeComponentsPermit {
  name?: string;
  desc?: string;
  valid?: CreativeComponentValid;
  component_type?: ComponentType;
  component_sub_type_options?: ComponentSubTypeOption[];
}

