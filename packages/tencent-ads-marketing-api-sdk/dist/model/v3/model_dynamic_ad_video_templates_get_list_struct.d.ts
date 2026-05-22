import type { Extra, SubTemplateStruct, VideoTemplateType } from "../v3/index";
export interface DynamicAdVideoTemplatesGetListStruct {
    template_id?: number | string;
    template_name?: string;
    template_type?: VideoTemplateType;
    product_catalog_id?: number | string;
    adcreative_template_id?: number | string;
    cover_image_url?: string;
    intro_video_url?: string;
    delivery_video_url?: string;
    support_channel?: boolean;
    coverage?: number;
    min_video_duration?: number;
    max_video_duration?: number;
    video_product_fields?: string[];
    image_product_fields?: string[];
    extra?: Extra;
    sub_template_list?: SubTemplateStruct[];
}
