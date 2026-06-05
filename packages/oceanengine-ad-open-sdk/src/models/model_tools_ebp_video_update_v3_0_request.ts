// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_video_update_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsEbpVideoUpdateV30AccountType, ToolsEbpVideoUpdateV30RequestVideosInner } from "../models/index";

export interface ToolsEbpVideoUpdateV30Request {
  account_id: number | string;
  account_type?: ToolsEbpVideoUpdateV30AccountType;
  videos?: ToolsEbpVideoUpdateV30RequestVideosInner[];
}

