// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_expand_field_definition.go
// Do not edit manually.

import type { QualificationExpandFieldType } from "../v3/index";

export interface ExpandFieldDefinition {
  field_name?: string;
  field_name_cn?: string;
  field_type?: QualificationExpandFieldType;
  required?: boolean;
  max_length?: number;
  options?: string[];
}

