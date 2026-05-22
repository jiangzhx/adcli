// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataKeywordsMatchType, QianchuanAdDetailGetV10DataKeywordsStatus } from "../models";

export interface QianchuanAdDetailGetV10ResponseDataKeywordsInner {
  grab_first_screen_switch?: boolean;
  id?: number | string;
  match_type?: QianchuanAdDetailGetV10DataKeywordsMatchType;
  status?: QianchuanAdDetailGetV10DataKeywordsStatus;
  word?: string;
  word_id?: number | string;
  word_package_id?: number | string;
  word_package_name?: string;
}

