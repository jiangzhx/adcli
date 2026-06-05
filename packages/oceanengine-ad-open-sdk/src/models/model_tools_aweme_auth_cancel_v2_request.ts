// 由 oceanengine/ad_open_sdk_go models/model_tools_aweme_auth_cancel_v2_request.go 生成
// 不要手动编辑。

import type { ToolsAwemeAuthCancelV2AuthType } from "../models/index";

export interface ToolsAwemeAuthCancelV2Request {
  advertiser_id: number | string;
  auth_type: ToolsAwemeAuthCancelV2AuthType;
  aweme_id?: string;
  item_id?: number | string;
}

