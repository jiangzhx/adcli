// 由 oceanengine/ad_open_sdk_go models/model_agent_info_v2_response_data.go 生成
// 不要手动编辑。

import type { AgentInfoV2DataAccountStatus, AgentInfoV2DataRole } from "../models/index";

export interface AgentInfoV2ResponseData {
  account_status?: AgentInfoV2DataAccountStatus;
  agent_id?: number | string;
  agent_name?: string;
  company_id?: number | string;
  company_name?: string;
  create_time?: string;
  customer_id?: number | string;
  customer_name?: string;
  role?: AgentInfoV2DataRole;
}

