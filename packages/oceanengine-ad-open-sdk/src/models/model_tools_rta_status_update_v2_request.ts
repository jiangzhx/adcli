// 由 oceanengine/ad_open_sdk_go models/model_tools_rta_status_update_v2_request.go 生成
// 不要手动编辑。

import type { ToolsRtaStatusUpdateV2AccountType, ToolsRtaStatusUpdateV2Status } from "../models/index";

export interface ToolsRtaStatusUpdateV2Request {
  account_type?: ToolsRtaStatusUpdateV2AccountType;
  advertiser_id: number | string;
  rta_ids: (number | string)[];
  status: ToolsRtaStatusUpdateV2Status;
}

