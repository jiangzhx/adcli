// 由 oceanengine/ad_open_sdk_go models/model_agent_advertiser_copy_v2_request.go 生成
// 不要手动编辑。

import type { AgentAdvertiserCopyV2ReportType, AgentAdvertiserCopyV2RequestItemInner } from "../models/index";

export interface AgentAdvertiserCopyV2Request {
  advertiser_id: number | string;
  agent_id: number | string;
  copy_delivery?: boolean;
  copy_tag?: boolean;
  item: AgentAdvertiserCopyV2RequestItemInner[];
  report_type?: AgentAdvertiserCopyV2ReportType;
}

