// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_keywords_get_v1_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { QianchuanAdKeywordsGetV10DataListMatchType, QianchuanAdKeywordsGetV10DataListStatus } from "../models/index";

export interface QianchuanAdKeywordsGetV10ResponseDataListInner {
  ad_id?: number | string;
  id?: number | string;
  match_type?: QianchuanAdKeywordsGetV10DataListMatchType;
  status?: QianchuanAdKeywordsGetV10DataListStatus;
  word?: string;
  word_id?: number | string;
}

