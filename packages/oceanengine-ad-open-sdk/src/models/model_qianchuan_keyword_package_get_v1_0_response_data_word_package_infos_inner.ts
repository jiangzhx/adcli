// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_keyword_package_get_v1_0_response_data_word_package_infos_inner.go 生成
// 不要手动编辑。

import type { QianchuanKeywordPackageGetV10ResponseDataWordPackageInfosInnerKeywordInfosInner } from "../models/index";

export interface QianchuanKeywordPackageGetV10ResponseDataWordPackageInfosInner {
  degree?: number;
  id: number | string;
  keyword_infos?: QianchuanKeywordPackageGetV10ResponseDataWordPackageInfosInnerKeywordInfosInner[];
  name: string;
  search_sum?: number;
}

