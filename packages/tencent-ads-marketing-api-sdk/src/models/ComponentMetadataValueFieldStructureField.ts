// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ComponentMetadataFieldType, ComponentMetadataValueFieldStructureFieldSub, ComponentMetadataValueValid } from "../models";

export interface ComponentMetadataValueFieldStructureField {
  name?: string;
  type?: ComponentMetadataFieldType;
  structure?: ComponentMetadataValueFieldStructureFieldSub[];
  is_array?: boolean;
  valid?: ComponentMetadataValueValid;
}

