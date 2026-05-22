// Generated from oceanengine/ad_open_sdk_go models/model_local_promotion_detail_v3_0_response_data_procedural_material_video_material_list_inner.go
// Do not edit manually.

import type { LocalPromotionDetailV30DataProceduralMaterialVideoMaterialListImageMode, LocalPromotionDetailV30DataProceduralMaterialVideoMaterialListIsFfSeeSetting } from "../models/index";

export interface LocalPromotionDetailV30ResponseDataProceduralMaterialVideoMaterialListInner {
  cover_image_height?: number;
  cover_image_width?: number;
  cover_web_uri?: string;
  cover_web_url?: string;
  image_mode: LocalPromotionDetailV30DataProceduralMaterialVideoMaterialListImageMode;
  is_ff_see_setting: LocalPromotionDetailV30DataProceduralMaterialVideoMaterialListIsFfSeeSetting;
  lego_material_id?: number | string;
  material_id?: number | string;
  video_duration?: number;
  video_height?: number;
  video_id: string;
  video_play_url?: string;
  video_width?: number;
}

