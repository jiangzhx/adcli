// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionNewcustomerCreateV30BidType, PromotionNewcustomerCreateV30ExternalAction, PromotionNewcustomerCreateV30RequestAudience, PromotionNewcustomerCreateV30RequestPromotionMaterials, PromotionNewcustomerCreateV30RequestRelatedProductsInner } from "../models";

export interface PromotionNewcustomerCreateV30Request {
  advertiser_id: number;
  audience?: PromotionNewcustomerCreateV30RequestAudience;
  aweme_id: string;
  bid_type?: PromotionNewcustomerCreateV30BidType;
  budget: number;
  cpa_bid?: number;
  delivery_duration: number;
  external_action: PromotionNewcustomerCreateV30ExternalAction[];
  promotion_materials?: PromotionNewcustomerCreateV30RequestPromotionMaterials;
  related_products?: PromotionNewcustomerCreateV30RequestRelatedProductsInner[];
  schedule_time?: string;
}

