// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ComponentMetadataFieldType, ComponentMetadataValueFieldStructureField, ComponentMetadataValueValid } from "../models";

export interface ComponentMetadataValueField {
  name?: string;
  type?: ComponentMetadataFieldType;
  structure?: ComponentMetadataValueFieldStructureField[];
  is_array?: boolean;
  valid?: ComponentMetadataValueValid;
  label?: string;
}

