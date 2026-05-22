import type { AdcreativeCreativeElements, DestinationType, PreviewPageSpec, PromotedObjectType } from "../model/index";
export interface AdcreativePreviewSpec {
    adcreative_template_id?: number | string;
    site_set?: string[];
    promoted_object_type?: PromotedObjectType;
    adcreative_elements?: AdcreativeCreativeElements;
    promoted_object_id?: string;
    page_type?: DestinationType;
    page_spec?: PreviewPageSpec;
}
