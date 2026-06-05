// 由 oceanengine/ad_open_sdk_go models/model_std_project_create_v3_0_response_data.go 生成
// 不要手动编辑。

import type { StdProjectCreateV30ResponseDataErrorKeywordsListInner, StdProjectCreateV30ResponseDataNoticeInner } from "../models/index";

export interface StdProjectCreateV30ResponseData {
  error_keywords_list?: StdProjectCreateV30ResponseDataErrorKeywordsListInner[];
  notice?: StdProjectCreateV30ResponseDataNoticeInner[];
  project_id?: number | string;
  supplementary_agreement_info?: string;
}

