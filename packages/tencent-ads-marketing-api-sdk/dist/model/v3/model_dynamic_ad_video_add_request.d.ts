import type { ProductMode } from "../v3/index";
export interface DynamicAdVideoAddRequest {
    account_id?: number | string;
    product_catalog_id?: number | string;
    product_mode?: ProductMode;
    product_source?: string;
    product_outer_id?: string;
    product_series_id?: number | string;
    video_max_duration?: number;
    dynamic_ad_template_id?: number | string;
}
