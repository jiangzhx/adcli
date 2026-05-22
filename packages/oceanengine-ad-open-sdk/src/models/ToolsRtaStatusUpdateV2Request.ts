// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsRtaStatusUpdateV2AccountType, ToolsRtaStatusUpdateV2Status } from "../models";

export interface ToolsRtaStatusUpdateV2Request {
  account_type?: ToolsRtaStatusUpdateV2AccountType;
  advertiser_id: number;
  rta_ids: number[];
  status: ToolsRtaStatusUpdateV2Status;
}

