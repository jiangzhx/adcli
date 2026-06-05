// 由 oceanengine/ad_open_sdk_go models/model_tools_aweme_auth_v2_request.go 生成
// 不要手动编辑。

import type { ToolsAwemeAuthV2AuthType } from "../models/index";

export interface ToolsAwemeAuthV2Request {
  advertiser_id: number | string;
  auth_type: ToolsAwemeAuthV2AuthType;
  aweme_id: string;
  code: string;
  end_time: string;
  item_url?: string;
  note?: string;
  start_time: string;
}

