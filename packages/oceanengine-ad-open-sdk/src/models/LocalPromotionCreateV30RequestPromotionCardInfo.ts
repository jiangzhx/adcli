// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalPromotionCreateV30RequestPromotionCardInfoCallToActionsInner, LocalPromotionCreateV30RequestPromotionCardInfoProductImagesInner, LocalPromotionCreateV30RequestPromotionCardInfoProductSellingPointsInner } from "../models";

export interface LocalPromotionCreateV30RequestPromotionCardInfo {
  call_to_actions: LocalPromotionCreateV30RequestPromotionCardInfoCallToActionsInner[];
  enable_personal_call_to_action: boolean;
  product_images: LocalPromotionCreateV30RequestPromotionCardInfoProductImagesInner[];
  product_name: string;
  product_selling_points: LocalPromotionCreateV30RequestPromotionCardInfoProductSellingPointsInner[];
}

