// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_creative_component_value_field.go
// Do not edit manually.

import type { ComponentMetadataFieldType, CreativeComponentValueValid, CreativeComponentValueValidStructureField } from "../v3/index";

export interface CreativeComponentValueField {
  name?: string;
  desc?: string;
  type?: ComponentMetadataFieldType;
  structure?: CreativeComponentValueValidStructureField[];
  valid?: CreativeComponentValueValid;
}

