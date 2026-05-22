import type { PreviewCreativeComponents } from "../models";
export interface DynamicCreativePreviewsAddRequest {
    account_id?: number | string;
    dynamic_creative_id?: number | string;
    preview_creative_components?: PreviewCreativeComponents;
    user_id_list?: string[];
}
