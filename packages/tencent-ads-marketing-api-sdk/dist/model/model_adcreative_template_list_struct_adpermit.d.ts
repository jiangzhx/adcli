import type { PromotedObjectType, SiteSetDefinition, SupportBillingSpec } from "../model/index";
export interface AdcreativeTemplateListStructAdpermit {
    adcreative_template_id?: number | string;
    adcreative_template_style?: string;
    adcreative_template_appellation?: string;
    adcreative_sample_image?: string;
    promoted_object_type?: PromotedObjectType;
    site_set?: SiteSetDefinition;
    support_billing_spec_list?: SupportBillingSpec[];
    support_bid_mode_list?: string[];
}
