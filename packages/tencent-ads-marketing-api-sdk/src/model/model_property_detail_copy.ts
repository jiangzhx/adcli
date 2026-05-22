// Generated from tencentad/marketing-api-go-sdk pkg/model/model_property_detail_copy.go
// Do not edit manually.

import type { AdcreativeElementArrayProperty, AdcreativeElementEnumProperty, NumberRestriction, TextRestriction } from "../model/index";

export interface PropertyDetailCopy {
  string_detail?: TextRestriction;
  integer_detail?: NumberRestriction;
  enum_detail?: AdcreativeElementEnumProperty;
  array_restriction?: AdcreativeElementArrayProperty;
}

