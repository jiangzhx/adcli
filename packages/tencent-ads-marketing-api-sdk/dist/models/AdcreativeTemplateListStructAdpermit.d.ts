import type { SiteSetDefinition, SupportSiteSetStruct } from "../models";
export interface AdcreativeTemplateListStructAdpermit {
    creative_template_id?: number | string;
    creative_template_style?: string;
    creative_template_appellation?: string;
    creative_sample_image?: string;
    site_set?: SiteSetDefinition;
    creative_template_size?: string;
    support_bid_mode_list?: string[];
    support_site_set_info?: SupportSiteSetStruct[];
    is_offline?: boolean;
    offline_tips?: string;
}
