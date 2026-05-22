// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_metadata_value_field_structure_field.go
// Do not edit manually.

import type { ComponentMetadataFieldType, ComponentMetadataValueFieldStructureFieldSub, ComponentMetadataValueValid } from "../v3/index";

export interface ComponentMetadataValueFieldStructureField {
  name?: string;
  type?: ComponentMetadataFieldType;
  structure?: ComponentMetadataValueFieldStructureFieldSub[];
  is_array?: boolean;
  valid?: ComponentMetadataValueValid;
}

