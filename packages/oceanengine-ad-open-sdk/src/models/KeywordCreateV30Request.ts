// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { KeywordCreateV30RequestKeywordsInner } from "../models";

export interface KeywordCreateV30Request {
  advertiser_id: number;
  keywords: KeywordCreateV30RequestKeywordsInner[];
  project_id?: number;
  promotion_id?: number;
}

