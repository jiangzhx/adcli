// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentAdvertiserCopyV2ReportType, AgentAdvertiserCopyV2RequestItemInner } from "../models";

export interface AgentAdvertiserCopyV2Request {
  advertiser_id: number;
  agent_id: number;
  copy_delivery?: boolean;
  copy_tag?: boolean;
  item: AgentAdvertiserCopyV2RequestItemInner[];
  report_type?: AgentAdvertiserCopyV2ReportType;
}

