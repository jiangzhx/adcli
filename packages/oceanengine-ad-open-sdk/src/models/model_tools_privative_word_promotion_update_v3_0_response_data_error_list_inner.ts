// Generated from oceanengine/ad_open_sdk_go models/model_tools_privative_word_promotion_update_v3_0_response_data_error_list_inner.go
// Do not edit manually.

import type { ToolsPrivativeWordPromotionUpdateV30ResponseDataErrorListInnerFailPhraseWordsInner, ToolsPrivativeWordPromotionUpdateV30ResponseDataErrorListInnerFailPreciseWordsInner } from "../models/index";

export interface ToolsPrivativeWordPromotionUpdateV30ResponseDataErrorListInner {
  error_message?: string;
  fail_phrase_words?: ToolsPrivativeWordPromotionUpdateV30ResponseDataErrorListInnerFailPhraseWordsInner[];
  fail_precise_words?: ToolsPrivativeWordPromotionUpdateV30ResponseDataErrorListInnerFailPreciseWordsInner[];
  promotion_id?: number | string;
}

