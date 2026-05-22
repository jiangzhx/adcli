// Generated from oceanengine/ad_open_sdk_go models/model_keyword_update_v3_0_request.go
// Do not edit manually.

import type { KeywordUpdateV30RequestKeywordsInner } from "../models/index";

export interface KeywordUpdateV30Request {
  advertiser_id: number | string;
  keywords: KeywordUpdateV30RequestKeywordsInner[];
  project_id?: number | string;
  promotion_id?: number | string;
}

