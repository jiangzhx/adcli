import type { SubMethod } from "../models";
export interface ProductRecommendMethod {
    method_id?: number | string;
    method_name?: string;
    method_description?: string;
    sub_method_operators?: string[];
    sub_methods?: SubMethod[];
}
