// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { PromotionEasyUpdateV30RequestPromotionMaterials } from "../models";

export interface PromotionEasyUpdateV30Request {
  advertiser_id: number;
  budget?: number;
  cpa_bid?: number;
  delivery_duration?: number;
  project_id: number;
  promotion_id: number;
  promotion_materials?: PromotionEasyUpdateV30RequestPromotionMaterials;
  schedule_time?: string;
}

