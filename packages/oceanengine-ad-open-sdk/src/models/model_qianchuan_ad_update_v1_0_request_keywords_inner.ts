// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_update_v1_0_request_keywords_inner.go
// Do not edit manually.

import type { QianchuanAdUpdateV10KeywordsMatchType } from "../models/index";

export interface QianchuanAdUpdateV10RequestKeywordsInner {
  grab_first_screen_switch?: boolean;
  match_type: QianchuanAdUpdateV10KeywordsMatchType;
  word: string;
  word_id?: number | string;
  word_package_id?: number | string;
  word_package_name?: string;
}

