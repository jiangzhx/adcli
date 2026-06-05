// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_game_create_v3_0_request_schema_info_inner.go 生成
// 不要手动编辑。

import type { ToolsEbpMicroGameCreateV30SchemaInfoOperateType } from "../models/index";

export interface ToolsEbpMicroGameCreateV30RequestSchemaInfoInner {
  id?: number | string;
  link?: string;
  operate_type?: ToolsEbpMicroGameCreateV30SchemaInfoOperateType;
  remark: string;
  start_page?: string;
  start_param?: string;
}

