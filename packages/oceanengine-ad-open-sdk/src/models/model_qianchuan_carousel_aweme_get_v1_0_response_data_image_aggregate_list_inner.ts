// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_carousel_aweme_get_v1_0_response_data_image_aggregate_list_inner.go
// Do not edit manually.

import type { QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerAuditSuggestions, QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerImagesInner, QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerMetrics } from "../models/index";

export interface QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInner {
  audit_suggestions?: QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerAuditSuggestions;
  aweme_carousel_id?: string;
  description?: string;
  images?: QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerImagesInner[];
  material_id?: number | string;
  metrics?: QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerMetrics;
  music_id?: string;
  music_url?: string;
  title?: string;
}

