import type { AdcreativeElementArrayProperty, AdcreativeElementEnumProperty, NumberRestriction, TextRestriction } from "../models";
export interface PropertyDetailCopy {
    string_detail?: TextRestriction;
    integer_detail?: NumberRestriction;
    enum_detail?: AdcreativeElementEnumProperty;
    array_restriction?: AdcreativeElementArrayProperty;
}
