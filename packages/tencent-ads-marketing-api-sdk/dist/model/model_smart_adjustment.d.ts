import type { CampaignType, PromotedObjectType } from "../model/index";
export interface SmartAdjustment {
    adcreative_template_id?: number | string;
    campaign_type?: CampaignType;
    promoted_object_type?: PromotedObjectType;
    site_set?: string[];
}
