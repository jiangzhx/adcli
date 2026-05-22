import type { AdcreativeElementArrayProperty, AdcreativeElementEnumProperty, NumberRestriction, TextRestriction } from "../model/index";
export interface PropertyDetailCopy {
    string_detail?: TextRestriction;
    integer_detail?: NumberRestriction;
    enum_detail?: AdcreativeElementEnumProperty;
    array_restriction?: AdcreativeElementArrayProperty;
}
