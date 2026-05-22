// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_metadata_value_field.go
// Do not edit manually.

import type { ComponentMetadataFieldType, ComponentMetadataValueFieldStructureField, ComponentMetadataValueValid } from "../v3/index";

export interface ComponentMetadataValueField {
  name?: string;
  type?: ComponentMetadataFieldType;
  structure?: ComponentMetadataValueFieldStructureField[];
  is_array?: boolean;
  valid?: ComponentMetadataValueValid;
  label?: string;
}

