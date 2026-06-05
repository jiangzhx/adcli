// 由 oceanengine/ad_open_sdk_go models/model_std_project_update_v3_0_response_data.go 生成
// 不要手动编辑。

import type { StdProjectUpdateV30ResponseDataErrorKeywordsListInner } from "../models/index";

export interface StdProjectUpdateV30ResponseData {
  error_keywords_list?: StdProjectUpdateV30ResponseDataErrorKeywordsListInner[];
  project_id?: number | string;
  supplementary_agreement_info?: string;
  task_id?: number | string;
}

