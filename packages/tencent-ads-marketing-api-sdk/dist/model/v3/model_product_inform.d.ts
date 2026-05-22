import type { ActionProductInformType } from "../v3/index";
export interface ProductInform {
    content_type?: ActionProductInformType;
    product_catalog_id?: string;
    product_id?: string[];
    category_path?: string[];
}
