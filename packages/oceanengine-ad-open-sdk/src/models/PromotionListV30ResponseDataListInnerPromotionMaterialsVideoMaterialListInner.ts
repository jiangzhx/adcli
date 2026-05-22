// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionListV30DataListPromotionMaterialsVideoMaterialListAutoMaterialSource, PromotionListV30DataListPromotionMaterialsVideoMaterialListImageMode, PromotionListV30DataListPromotionMaterialsVideoMaterialListIsCarryMaterial, PromotionListV30DataListPromotionMaterialsVideoMaterialListMaterialOptStatus, PromotionListV30DataListPromotionMaterialsVideoMaterialListMaterialStatus, PromotionListV30DataListPromotionMaterialsVideoMaterialListVideoHpVisibility, PromotionListV30DataListPromotionMaterialsVideoMaterialListVideoTemplateType } from "../models";

export interface PromotionListV30ResponseDataListInnerPromotionMaterialsVideoMaterialListInner {
  auto_material_source?: PromotionListV30DataListPromotionMaterialsVideoMaterialListAutoMaterialSource;
  create_time?: string;
  guide_video_id?: string;
  image_mode?: PromotionListV30DataListPromotionMaterialsVideoMaterialListImageMode;
  is_carry_material?: PromotionListV30DataListPromotionMaterialsVideoMaterialListIsCarryMaterial;
  item_id?: number | string;
  material_id?: number | string;
  material_opt_status?: PromotionListV30DataListPromotionMaterialsVideoMaterialListMaterialOptStatus;
  material_status?: PromotionListV30DataListPromotionMaterialsVideoMaterialListMaterialStatus;
  video_cover_id?: string;
  video_hp_visibility?: PromotionListV30DataListPromotionMaterialsVideoMaterialListVideoHpVisibility;
  video_id?: string;
  video_task_ids?: string[];
  video_template_type?: PromotionListV30DataListPromotionMaterialsVideoMaterialListVideoTemplateType;
  visible_end_date?: string;
}

