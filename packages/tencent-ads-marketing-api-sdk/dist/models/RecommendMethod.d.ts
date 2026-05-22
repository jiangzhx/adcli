import type { SubMethod } from "../models";
export interface RecommendMethod {
    method_id?: number | string;
    method_name?: string;
    method_description?: string;
    sub_method_operators?: string[];
    sub_methods?: SubMethod[];
}
