import type { ProductAttributeType } from "../models";
export interface AttributeItem {
    attribute_name?: string;
    attribute_type?: ProductAttributeType;
    last_category_id?: number | string;
}
