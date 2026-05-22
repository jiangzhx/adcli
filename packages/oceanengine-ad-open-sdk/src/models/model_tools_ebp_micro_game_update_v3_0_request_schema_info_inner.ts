// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_game_update_v3_0_request_schema_info_inner.go
// Do not edit manually.

import type { ToolsEbpMicroGameUpdateV30SchemaInfoOperateType } from "../models/index";

export interface ToolsEbpMicroGameUpdateV30RequestSchemaInfoInner {
  id?: number | string;
  link?: string;
  operate_type: ToolsEbpMicroGameUpdateV30SchemaInfoOperateType;
  remark: string;
  start_page?: string;
  start_param?: string;
}

