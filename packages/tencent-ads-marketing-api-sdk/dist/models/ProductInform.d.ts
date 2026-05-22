import type { ActionProductInformType } from "../models";
export interface ProductInform {
    content_type?: ActionProductInformType;
    product_catalog_id?: string;
    product_id?: string[];
    category_path?: string[];
}
