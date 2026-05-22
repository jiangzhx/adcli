import type { AdNum, DynamicAdTemplateSize } from "../model/index";
export interface DynamicAdImagesAddRequest {
    account_id?: number | string;
    product_catalog_id?: number | string;
    product_mode?: AdNum;
    product_source?: string;
    dynamic_ad_template_size?: DynamicAdTemplateSize;
    dynamic_ad_template_id?: number | string;
    image_matting_enabled?: boolean;
}
