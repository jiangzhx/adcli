// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalPromotionUpdateV30RequestCustomerMaterialListInner, LocalPromotionUpdateV30RequestProceduralMaterial, LocalPromotionUpdateV30RequestPromotionCardInfo, LocalPromotionUpdateV30VideoHpVisibility } from "../models";

export interface LocalPromotionUpdateV30Request {
  aweme_id?: string;
  customer_material_list?: LocalPromotionUpdateV30RequestCustomerMaterialListInner[];
  local_account_id: number | string;
  name?: string;
  procedural_material?: LocalPromotionUpdateV30RequestProceduralMaterial;
  promotion_card_info?: LocalPromotionUpdateV30RequestPromotionCardInfo;
  promotion_id: number | string;
  video_hp_visibility?: LocalPromotionUpdateV30VideoHpVisibility;
}

