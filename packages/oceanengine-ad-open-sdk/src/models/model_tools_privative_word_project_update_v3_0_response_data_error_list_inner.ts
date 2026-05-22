// Generated from oceanengine/ad_open_sdk_go models/model_tools_privative_word_project_update_v3_0_response_data_error_list_inner.go
// Do not edit manually.

import type { ToolsPrivativeWordProjectUpdateV30ResponseDataErrorListInnerFailPhraseWordsInner, ToolsPrivativeWordProjectUpdateV30ResponseDataErrorListInnerFailPreciseWordsInner } from "../models/index";

export interface ToolsPrivativeWordProjectUpdateV30ResponseDataErrorListInner {
  error_message?: string;
  fail_phrase_words?: ToolsPrivativeWordProjectUpdateV30ResponseDataErrorListInnerFailPhraseWordsInner[];
  fail_precise_words?: ToolsPrivativeWordProjectUpdateV30ResponseDataErrorListInnerFailPreciseWordsInner[];
  project_id?: number | string;
}

