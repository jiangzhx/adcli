import type { PreviewCreativeComponents } from "../v3/index";
export interface DynamicCreativePreviewsAddRequest {
    account_id?: number | string;
    dynamic_creative_id?: number | string;
    preview_creative_components?: PreviewCreativeComponents;
    user_id_list?: string[];
}
