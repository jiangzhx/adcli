// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_tools_aweme_auth_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanToolsAwemeAuthV10AuthType } from "../models/index";

export interface QianchuanToolsAwemeAuthV10Request {
  advertiser_id: number | string;
  auth_type: QianchuanToolsAwemeAuthV10AuthType;
  aweme_id?: string;
  aweme_show_id?: string;
  code: string;
  end_time: string;
  notes?: string;
}

