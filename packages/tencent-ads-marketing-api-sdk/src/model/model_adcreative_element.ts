// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adcreative_element.go
// Do not edit manually.

import type { AdcreativeElementArrayProperty, AdcreativeElementEnumProperty, AdcreativeElementRestriction, AdcreativeElementStructProperty, ElementType, FieldType } from "../model/index";

export interface AdcreativeElement {
  name?: string;
  element_type?: ElementType;
  field_type?: FieldType;
  required?: boolean;
  description?: string;
  parent_name?: string;
  enum_property?: AdcreativeElementEnumProperty;
  array_property?: AdcreativeElementArrayProperty;
  struct_property?: AdcreativeElementStructProperty;
  restriction?: AdcreativeElementRestriction;
}

