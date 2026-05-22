// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionCreateV30PromotionMaterialsVideoMaterialListImageMode, PromotionCreateV30PromotionMaterialsVideoMaterialListVideoHpVisibility, PromotionCreateV30PromotionMaterialsVideoMaterialListVideoTemplateType } from "../models";

export interface PromotionCreateV30RequestPromotionMaterialsVideoMaterialListInner {
  guide_video_id?: string;
  image_mode: PromotionCreateV30PromotionMaterialsVideoMaterialListImageMode;
  item_id?: number;
  video_cover_id?: string;
  video_hp_visibility?: PromotionCreateV30PromotionMaterialsVideoMaterialListVideoHpVisibility;
  video_id?: string;
  video_task_ids?: string[];
  video_template_type?: PromotionCreateV30PromotionMaterialsVideoMaterialListVideoTemplateType;
}

