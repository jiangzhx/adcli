// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPhraseWordsInner, ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPreciseWordsInner } from "../models";

export interface ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInner {
  error_message?: string;
  fail_phrase_words?: ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPhraseWordsInner[];
  fail_precise_words?: ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPreciseWordsInner[];
  promotion_id?: number | string;
}

