// 由 oceanengine/ad_open_sdk_go models/model_tools_privative_word_promotion_add_v3_0_response_data_error_list_inner.go 生成
// 不要手动编辑。

import type { ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPhraseWordsInner, ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPreciseWordsInner } from "../models/index";

export interface ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInner {
  error_message?: string;
  fail_phrase_words?: ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPhraseWordsInner[];
  fail_precise_words?: ToolsPrivativeWordPromotionAddV30ResponseDataErrorListInnerFailPreciseWordsInner[];
  promotion_id?: number | string;
}

