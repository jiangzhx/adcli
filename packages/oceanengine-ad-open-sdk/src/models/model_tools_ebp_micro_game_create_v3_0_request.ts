// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_game_create_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsEbpMicroGameCreateV30AccountType, ToolsEbpMicroGameCreateV30RequestSchemaInfoInner } from "../models/index";

export interface ToolsEbpMicroGameCreateV30Request {
  account_id: number | string;
  account_type: ToolsEbpMicroGameCreateV30AccountType;
  app_id: string;
  data?: Record<string, string>;
  remark: string;
  schema_info: ToolsEbpMicroGameCreateV30RequestSchemaInfoInner[];
}

