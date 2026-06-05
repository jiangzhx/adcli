// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_video_delete_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsEbpVideoDeleteV30AccountType } from "../models/index";

export interface ToolsEbpVideoDeleteV30Request {
  account_id: number | string;
  account_type?: ToolsEbpVideoDeleteV30AccountType;
  material_ids?: (number | string)[];
}

