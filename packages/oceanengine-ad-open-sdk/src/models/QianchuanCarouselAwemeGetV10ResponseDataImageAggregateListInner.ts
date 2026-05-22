// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerAuditSuggestions, QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerImagesInner, QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerMetrics } from "../models";

export interface QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInner {
  audit_suggestions?: QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerAuditSuggestions;
  aweme_carousel_id?: string;
  description?: string;
  images?: QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerImagesInner[];
  material_id?: number;
  metrics?: QianchuanCarouselAwemeGetV10ResponseDataImageAggregateListInnerMetrics;
  music_id?: string;
  music_url?: string;
  title?: string;
}

