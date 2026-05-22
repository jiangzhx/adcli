// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalPromotionCreateV30LiveMaterialType, LocalPromotionCreateV30RequestCustomerMaterialListInner, LocalPromotionCreateV30RequestProceduralMaterial, LocalPromotionCreateV30RequestPromotionCardInfo, LocalPromotionCreateV30VideoHpVisibility } from "../models";

export interface LocalPromotionCreateV30Request {
  aweme_id?: string;
  customer_material_list?: LocalPromotionCreateV30RequestCustomerMaterialListInner[];
  enable_graphic_delivery?: boolean;
  live_material_type?: LocalPromotionCreateV30LiveMaterialType;
  local_account_id: number | string;
  name: string;
  procedural_material?: LocalPromotionCreateV30RequestProceduralMaterial;
  project_id: number | string;
  promotion_card_info?: LocalPromotionCreateV30RequestPromotionCardInfo;
  video_hp_visibility?: LocalPromotionCreateV30VideoHpVisibility;
}

