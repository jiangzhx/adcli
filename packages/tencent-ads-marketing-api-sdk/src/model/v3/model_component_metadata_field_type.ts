// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_metadata_field_type.go
// Do not edit manually.

export const ComponentMetadataFieldType = {
  UNKNOWN: "UNKNOWN",
  STRING: "STRING",
  INT: "INT",
  BOOL: "BOOL",
  STRING_ARRAY: "STRING_ARRAY",
  INT_ARRAY: "INT_ARRAY",
  STRUCTURE: "STRUCTURE",
  STRUCTURE_ARRAY: "STRUCTURE_ARRAY",
} as const;

export type ComponentMetadataFieldType = typeof ComponentMetadataFieldType[keyof typeof ComponentMetadataFieldType];

