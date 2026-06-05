// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_audience_create_by_file_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanAudienceCreateByFileV10MatchType } from "../models/index";

export interface QianchuanAudienceCreateByFileV10Request {
  advertiser_id: number | string;
  audience_group: string;
  audience_name: string;
  data_type: number;
  file_key: string;
  match_type: QianchuanAudienceCreateByFileV10MatchType;
}

