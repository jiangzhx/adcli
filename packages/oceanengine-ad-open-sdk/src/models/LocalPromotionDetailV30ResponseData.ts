// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalPromotionDetailV30DataLiveMaterialType, LocalPromotionDetailV30DataVideoHpVisibility, LocalPromotionDetailV30ResponseDataCustomerMaterialListInner, LocalPromotionDetailV30ResponseDataProceduralMaterial, LocalPromotionDetailV30ResponseDataPromotionCardInfo } from "../models";

export interface LocalPromotionDetailV30ResponseData {
  aweme_id?: string;
  customer_material_list?: LocalPromotionDetailV30ResponseDataCustomerMaterialListInner[];
  enable_graphic_delivery?: boolean;
  live_material_type?: LocalPromotionDetailV30DataLiveMaterialType;
  procedural_material?: LocalPromotionDetailV30ResponseDataProceduralMaterial;
  promotion_card_info?: LocalPromotionDetailV30ResponseDataPromotionCardInfo;
  promotion_id?: number;
  video_hp_visibility?: LocalPromotionDetailV30DataVideoHpVisibility;
}

