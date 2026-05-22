// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_keyword_package_get_v1_0_response_data_word_package_infos_inner_keyword_infos_inner.go
// Do not edit manually.

import type { QianchuanKeywordPackageGetV10DataWordPackageInfosKeywordInfosKeywordMatchType } from "../models/index";

export interface QianchuanKeywordPackageGetV10ResponseDataWordPackageInfosInnerKeywordInfosInner {
  degree?: number;
  keyword_id?: number | string;
  keyword_match_type?: QianchuanKeywordPackageGetV10DataWordPackageInfosKeywordInfosKeywordMatchType;
  keyword_name: string;
  search_sum?: number;
  word_package_name?: string;
}

