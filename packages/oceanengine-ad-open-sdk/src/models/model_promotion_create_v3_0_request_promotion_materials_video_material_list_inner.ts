// Generated from oceanengine/ad_open_sdk_go models/model_promotion_create_v3_0_request_promotion_materials_video_material_list_inner.go
// Do not edit manually.

import type { PromotionCreateV30PromotionMaterialsVideoMaterialListImageMode, PromotionCreateV30PromotionMaterialsVideoMaterialListVideoHpVisibility, PromotionCreateV30PromotionMaterialsVideoMaterialListVideoTemplateType } from "../models/index";

export interface PromotionCreateV30RequestPromotionMaterialsVideoMaterialListInner {
  guide_video_id?: string;
  image_mode: PromotionCreateV30PromotionMaterialsVideoMaterialListImageMode;
  item_id?: number | string;
  video_cover_id?: string;
  video_hp_visibility?: PromotionCreateV30PromotionMaterialsVideoMaterialListVideoHpVisibility;
  video_id?: string;
  video_task_ids?: string[];
  video_template_type?: PromotionCreateV30PromotionMaterialsVideoMaterialListVideoTemplateType;
}

