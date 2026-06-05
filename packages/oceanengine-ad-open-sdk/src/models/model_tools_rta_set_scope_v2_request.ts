// 由 oceanengine/ad_open_sdk_go models/model_tools_rta_set_scope_v2_request.go 生成
// 不要手动编辑。

import type { ToolsRtaSetScopeV2AccountType, ToolsRtaSetScopeV2TargetType } from "../models/index";

export interface ToolsRtaSetScopeV2Request {
  account_type?: ToolsRtaSetScopeV2AccountType;
  advertiser_id: number | string;
  rta_id: number | string;
  target_ids?: (number | string)[];
  target_type?: ToolsRtaSetScopeV2TargetType;
}

