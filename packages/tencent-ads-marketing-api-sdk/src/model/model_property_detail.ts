// Generated from tencentad/marketing-api-go-sdk pkg/model/model_property_detail.go
// Do not edit manually.

import type { AdcreativeElementArrayProperty, AdcreativeElementEnumProperty, NumberRestriction, StructDetail, TextRestriction } from "../model/index";

export interface PropertyDetail {
  string_detail?: TextRestriction;
  integer_detail?: NumberRestriction;
  enum_detail?: AdcreativeElementEnumProperty;
  struct_detail?: StructDetail;
  array_restriction?: AdcreativeElementArrayProperty;
}

