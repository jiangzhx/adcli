// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { BillingEvent, CampaignType, PromotedObjectType, SceneTargetingForWrite } from "../models";

export interface Adgroup {
  campaign_type?: CampaignType;
  billing_event?: BillingEvent;
  scene_spec?: SceneTargetingForWrite;
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
}

