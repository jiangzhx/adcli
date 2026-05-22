import type { AdcreativeElementArrayProperty, AdcreativeElementEnumProperty, AdcreativeElementRestriction, AdcreativeElementStructProperty, ElementType, FieldType } from "../models";
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
    path?: string;
}
