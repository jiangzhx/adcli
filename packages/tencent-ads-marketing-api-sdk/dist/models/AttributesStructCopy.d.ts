import type { FieldType, PropertyDetailCopy } from "../models";
export interface AttributesStructCopy {
    required?: boolean;
    name?: string;
    description?: string;
    field_type?: FieldType;
    property_detail?: PropertyDetailCopy;
}
