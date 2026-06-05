// 由 oceanengine/ad_open_sdk_go models/model_tools_aweme_auth_renewal_v2_request.go 生成
// 不要手动编辑。

import type { ToolsAwemeAuthRenewalV2AuthType } from "../models/index";

export interface ToolsAwemeAuthRenewalV2Request {
  advertiser_id?: number | string;
  auth_type: ToolsAwemeAuthRenewalV2AuthType;
  aweme_id?: string;
  end_time: string;
  item_id?: number | string;
}

