// Generated from oceanengine/ad_open_sdk_go models/model_keyword_create_v3_0_request.go
// Do not edit manually.

import type { KeywordCreateV30RequestKeywordsInner } from "../models/index";

export interface KeywordCreateV30Request {
  advertiser_id: number | string;
  keywords: KeywordCreateV30RequestKeywordsInner[];
  project_id?: number | string;
  promotion_id?: number | string;
}

