// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdCreateV10KeywordsMatchType } from "../models";

export interface QianchuanAdCreateV10RequestKeywordsInner {
  grab_first_screen_switch?: boolean;
  match_type: QianchuanAdCreateV10KeywordsMatchType;
  word: string;
  word_id?: number | string;
  word_package_id?: number | string;
  word_package_name?: string;
}

