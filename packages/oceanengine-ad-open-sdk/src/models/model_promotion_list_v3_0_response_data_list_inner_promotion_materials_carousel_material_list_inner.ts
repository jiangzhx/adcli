// Generated from oceanengine/ad_open_sdk_go models/model_promotion_list_v3_0_response_data_list_inner_promotion_materials_carousel_material_list_inner.go
// Do not edit manually.

import type { PromotionListV30DataListPromotionMaterialsCarouselMaterialListMaterialStatus, PromotionListV30DataListPromotionMaterialsCarouselMaterialListVideoHpVisibility } from "../models/index";

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

