// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_asset_auth_cancel_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsEbpAssetAuthCancelV30AccountType } from "../models/index";

export interface ToolsEbpAssetAuthCancelV30Request {
  account_id: number | string;
  account_type: ToolsEbpAssetAuthCancelV30AccountType;
  opt_ids?: (number | string)[];
}

