// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsRtaStatusUpdateV2AccountType, ToolsRtaStatusUpdateV2Status } from "../models";

export interface ToolsRtaStatusUpdateV2Request {
  account_type?: ToolsRtaStatusUpdateV2AccountType;
  advertiser_id: number | string;
  rta_ids: number | string[];
  status: ToolsRtaStatusUpdateV2Status;
}

