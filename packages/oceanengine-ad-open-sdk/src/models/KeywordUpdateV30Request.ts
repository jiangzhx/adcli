// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { KeywordUpdateV30RequestKeywordsInner } from "../models";

export interface KeywordUpdateV30Request {
  advertiser_id: number;
  keywords: KeywordUpdateV30RequestKeywordsInner[];
  project_id?: number;
  promotion_id?: number;
}

