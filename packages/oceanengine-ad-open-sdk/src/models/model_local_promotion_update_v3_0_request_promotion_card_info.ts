// Generated from oceanengine/ad_open_sdk_go models/model_local_promotion_update_v3_0_request_promotion_card_info.go
// Do not edit manually.

import type { LocalPromotionUpdateV30RequestPromotionCardInfoCallToActionsInner, LocalPromotionUpdateV30RequestPromotionCardInfoProductImagesInner, LocalPromotionUpdateV30RequestPromotionCardInfoProductSellingPointsInner } from "../models/index";

export interface LocalPromotionUpdateV30RequestPromotionCardInfo {
  call_to_actions: LocalPromotionUpdateV30RequestPromotionCardInfoCallToActionsInner[];
  enable_personal_call_to_action: boolean;
  product_images: LocalPromotionUpdateV30RequestPromotionCardInfoProductImagesInner[];
  product_name: string;
  product_selling_points: LocalPromotionUpdateV30RequestPromotionCardInfoProductSellingPointsInner[];
}

