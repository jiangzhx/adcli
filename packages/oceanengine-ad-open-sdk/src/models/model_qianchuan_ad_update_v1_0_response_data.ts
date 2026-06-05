// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_update_v1_0_response_data.go 生成
// 不要手动编辑。

import type { QianchuanAdUpdateV10ResponseDataErrorListInner, QianchuanAdUpdateV10ResponseDataNoticeInfosInner } from "../models/index";

export interface QianchuanAdUpdateV10ResponseData {
  ad_id?: number | string;
  error_list?: QianchuanAdUpdateV10ResponseDataErrorListInner[];
  notice_infos?: QianchuanAdUpdateV10ResponseDataNoticeInfosInner[];
}

