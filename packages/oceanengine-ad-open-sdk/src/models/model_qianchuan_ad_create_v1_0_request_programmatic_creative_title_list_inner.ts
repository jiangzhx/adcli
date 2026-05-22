// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_create_v1_0_request_programmatic_creative_title_list_inner.go
// Do not edit manually.

import type { QianchuanAdCreateV10ProgrammaticCreativeTitleListTitleType, QianchuanAdCreateV10RequestProgrammaticCreativeTitleListInnerDynamicWordsInner } from "../models/index";

export interface QianchuanAdCreateV10RequestProgrammaticCreativeTitleListInner {
  aweme_carousel_id?: number | string;
  dynamic_words?: QianchuanAdCreateV10RequestProgrammaticCreativeTitleListInnerDynamicWordsInner[];
  title: string;
  title_type?: QianchuanAdCreateV10ProgrammaticCreativeTitleListTitleType;
}

