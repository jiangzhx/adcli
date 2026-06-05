// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_app_publish_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsEbpAppPublishV30AccountType } from "../models/index";

export interface ToolsEbpAppPublishV30Request {
  account_id: number | string;
  account_type: ToolsEbpAppPublishV30AccountType;
  package_id: string;
}

