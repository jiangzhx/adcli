import type { AdcreativeCreativeElementsRead, PageSpec, PageTypeRead, PromotedObjectType, VideoEndPageSpec } from "../models";
export interface Adcreative {
    adcreative_id?: number | string;
    adcreative_name?: string;
    campaign_id?: number | string;
    page_type?: PageTypeRead;
    page_spec?: PageSpec;
    site_set?: string[];
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    created_time?: number;
    last_modified_time?: number;
    playable_page_material_id?: string;
    video_end_page?: VideoEndPageSpec;
    enable_breakthrough_siteset?: boolean;
    creative_template_category?: string;
    adcreative_template_id?: number | string;
    adcreative_elements?: AdcreativeCreativeElementsRead;
}
