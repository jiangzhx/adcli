// Generated from oceanengine/ad_open_sdk_go models/model_tools_rta_status_update_v2_request.go
// Do not edit manually.

import type { ToolsRtaStatusUpdateV2AccountType, ToolsRtaStatusUpdateV2Status } from "../models/index";

export interface ToolsRtaStatusUpdateV2Request {
  account_type?: ToolsRtaStatusUpdateV2AccountType;
  advertiser_id: number | string;
  rta_ids: number | string[];
  status: ToolsRtaStatusUpdateV2Status;
}

