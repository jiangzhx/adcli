// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_block_material_get_v1_0_response_data_carousel_list_inner.go
// Do not edit manually.

import type { QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerImagesInner, QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerMetrics } from "../models/index";

export interface QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInner {
  carousel_id?: number | string;
  create_time?: string;
  description?: string;
  images?: QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerImagesInner[];
  is_poor_quality?: boolean;
  material_id?: number | string;
  metrics?: QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerMetrics;
  music_id?: string;
  music_url?: string;
  product_id?: number | string;
  title?: string;
}

