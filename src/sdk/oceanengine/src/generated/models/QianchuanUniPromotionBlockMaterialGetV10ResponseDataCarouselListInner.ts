// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerImagesInner, QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerMetrics } from "../models";

export interface QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInner {
  carousel_id?: number;
  create_time?: string;
  description?: string;
  images?: QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerImagesInner[];
  is_poor_quality?: boolean;
  material_id?: number;
  metrics?: QianchuanUniPromotionBlockMaterialGetV10ResponseDataCarouselListInnerMetrics;
  music_id?: string;
  music_url?: string;
  product_id?: number;
  title?: string;
}

