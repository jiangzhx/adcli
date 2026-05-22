// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_ad_material_get_v1_0_response_data_ad_material_infos_inner_material_info_video_material.go
// Do not edit manually.

import type { QianchuanUniPromotionAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource, QianchuanUniPromotionAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialStarTraffic, QianchuanUniPromotionAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage } from "../models/index";

export interface QianchuanUniPromotionAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterial {
  aweme_item_id?: number | string;
  cover_image?: QianchuanUniPromotionAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage;
  material_id?: number | string;
  source?: QianchuanUniPromotionAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource;
  star_traffic?: QianchuanUniPromotionAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialStarTraffic;
  title?: string;
  url?: string;
  video_duration?: number;
  video_id?: string;
}

