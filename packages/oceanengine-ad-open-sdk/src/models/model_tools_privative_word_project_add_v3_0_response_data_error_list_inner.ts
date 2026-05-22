// Generated from oceanengine/ad_open_sdk_go models/model_tools_privative_word_project_add_v3_0_response_data_error_list_inner.go
// Do not edit manually.

import type { ToolsPrivativeWordProjectAddV30ResponseDataErrorListInnerFailPhraseWordsInner, ToolsPrivativeWordProjectAddV30ResponseDataErrorListInnerFailPreciseWordsInner } from "../models/index";

export interface ToolsPrivativeWordProjectAddV30ResponseDataErrorListInner {
  error_message?: string;
  fail_phrase_words?: ToolsPrivativeWordProjectAddV30ResponseDataErrorListInnerFailPhraseWordsInner[];
  fail_precise_words?: ToolsPrivativeWordProjectAddV30ResponseDataErrorListInnerFailPreciseWordsInner[];
  project_id?: number | string;
}

