// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_update_v1_0_request_programmatic_creative_title_list_inner.go
// Do not edit manually.

import type { QianchuanAdUpdateV10ProgrammaticCreativeTitleListTitleType, QianchuanAdUpdateV10RequestProgrammaticCreativeTitleListInnerDynamicWordsInner } from "../models/index";

export interface QianchuanAdUpdateV10RequestProgrammaticCreativeTitleListInner {
  aweme_carousel_id?: number | string;
  dynamic_words?: QianchuanAdUpdateV10RequestProgrammaticCreativeTitleListInnerDynamicWordsInner[];
  title: string;
  title_type?: QianchuanAdUpdateV10ProgrammaticCreativeTitleListTitleType;
}

