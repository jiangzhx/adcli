// Generated from oceanengine/ad_open_sdk_go models/model_promotion_update_v3_0_request_promotion_materials_video_material_list_inner.go
// Do not edit manually.

import type { PromotionUpdateV30PromotionMaterialsVideoMaterialListImageMode, PromotionUpdateV30PromotionMaterialsVideoMaterialListVideoHpVisibility, PromotionUpdateV30PromotionMaterialsVideoMaterialListVideoTemplateType } from "../models/index";

export interface PromotionUpdateV30RequestPromotionMaterialsVideoMaterialListInner {
  guide_video_id?: string;
  image_mode: PromotionUpdateV30PromotionMaterialsVideoMaterialListImageMode;
  item_id?: number | string;
  video_cover_id?: string;
  video_hp_visibility?: PromotionUpdateV30PromotionMaterialsVideoMaterialListVideoHpVisibility;
  video_id?: string;
  video_task_ids?: string[];
  video_template_type?: PromotionUpdateV30PromotionMaterialsVideoMaterialListVideoTemplateType;
}

