import type { AdNum } from "../model/index";
export interface DynamicAdSpec {
    product_catalog_id?: number | string;
    product_mode?: AdNum;
    product_source?: string;
    product_recommend_methods?: number[];
}
