import type { BillingEvent, CampaignType, PromotedObjectType, SceneTargetingForWrite } from "../model/index";
export interface Adgroup {
    campaign_type?: CampaignType;
    billing_event?: BillingEvent;
    scene_spec?: SceneTargetingForWrite;
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
}
