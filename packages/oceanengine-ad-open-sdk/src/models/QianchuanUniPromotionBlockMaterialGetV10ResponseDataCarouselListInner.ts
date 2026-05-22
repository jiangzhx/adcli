// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerImagesInner, QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerMetrics } from "../models";

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

