// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdUpdateV10KeywordsMatchType } from "../models";

export interface QianchuanAdUpdateV10RequestKeywordsInner {
  grab_first_screen_switch?: boolean;
  match_type: QianchuanAdUpdateV10KeywordsMatchType;
  word: string;
  word_id?: number;
  word_package_id?: number;
  word_package_name?: string;
}

