import type { FieldType, PropertyDetail } from "../model/index";
export interface AttributesStruct {
    required?: boolean;
    name?: string;
    description?: string;
    field_type?: FieldType;
    property_detail?: PropertyDetail;
}
