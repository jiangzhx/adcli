import type { CampaignType, PromotedObjectType } from "../models";
export interface SmartAdjustment {
    adcreative_template_id?: number | string;
    campaign_type?: CampaignType;
    promoted_object_type?: PromotedObjectType;
    site_set?: string[];
}
