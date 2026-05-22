import type { CampaignType, IntSiteSetDefinition, PromotedObjectType } from "../models";
export interface AdParamGetRequest {
    account_id?: number | string;
    campaign_type?: CampaignType;
    promoted_object_type?: PromotedObjectType;
    adcreative_template_id?: number | string;
    site_set?: IntSiteSetDefinition;
    product_catalog_id?: number | string;
}
