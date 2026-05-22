// Generated from oceanengine/ad_open_sdk_go models/model_agent_advertiser_copy_v2_request.go
// Do not edit manually.

import type { AgentAdvertiserCopyV2ReportType, AgentAdvertiserCopyV2RequestItemInner } from "../models/index";

export interface AgentAdvertiserCopyV2Request {
  advertiser_id: number | string;
  agent_id: number | string;
  copy_delivery?: boolean;
  copy_tag?: boolean;
  item: AgentAdvertiserCopyV2RequestItemInner[];
  report_type?: AgentAdvertiserCopyV2ReportType;
}

