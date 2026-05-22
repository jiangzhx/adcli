// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionListV30DataListPromotionMaterialsCarouselMaterialListMaterialStatus, PromotionListV30DataListPromotionMaterialsCarouselMaterialListVideoHpVisibility } from "../models";

export interface PromotionListV30ResponseDataListInnerPromotionMaterialsCarouselMaterialListInner {
  audio_id?: string;
  create_time?: string;
  image_id?: string[];
  is_blue_flow_recommend_material?: boolean;
  item_id?: number | string;
  material_id?: number | string;
  material_status?: PromotionListV30DataListPromotionMaterialsCarouselMaterialListMaterialStatus;
  video_hp_visibility?: PromotionListV30DataListPromotionMaterialsCarouselMaterialListVideoHpVisibility;
  visible_end_date?: string;
}

