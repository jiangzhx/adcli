// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalPromotionUpdateV30RequestPromotionCardInfoCallToActionsInner, LocalPromotionUpdateV30RequestPromotionCardInfoProductImagesInner, LocalPromotionUpdateV30RequestPromotionCardInfoProductSellingPointsInner } from "../models";

export interface LocalPromotionUpdateV30RequestPromotionCardInfo {
  call_to_actions: LocalPromotionUpdateV30RequestPromotionCardInfoCallToActionsInner[];
  enable_personal_call_to_action: boolean;
  product_images: LocalPromotionUpdateV30RequestPromotionCardInfoProductImagesInner[];
  product_name: string;
  product_selling_points: LocalPromotionUpdateV30RequestPromotionCardInfoProductSellingPointsInner[];
}

