// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_applet_create_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsEbpMicroAppletCreateV30AccountType, ToolsEbpMicroAppletCreateV30RequestSchemaInfoInner } from "../models/index";

export interface ToolsEbpMicroAppletCreateV30Request {
  account_id: number | string;
  account_type: ToolsEbpMicroAppletCreateV30AccountType;
  app_id: string;
  data: Record<string, string>;
  remark: string;
  schema_info: ToolsEbpMicroAppletCreateV30RequestSchemaInfoInner[];
}

