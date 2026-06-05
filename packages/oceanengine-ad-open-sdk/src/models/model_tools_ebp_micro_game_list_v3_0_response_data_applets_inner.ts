// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_game_list_v3_0_response_data_applets_inner.go 生成
// 不要手动编辑。

import type { ToolsEbpMicroGameListV30DataAppletsAuditStatus } from "../models/index";

export interface ToolsEbpMicroGameListV30ResponseDataAppletsInner {
  app_id?: string;
  audit_status?: ToolsEbpMicroGameListV30DataAppletsAuditStatus;
  data?: Record<string, string>;
  instance_id?: number | string;
  is_ebp_asset?: boolean;
  name?: string;
  reason?: string;
  remark?: string;
}

