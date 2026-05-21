// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentInfoV2DataAccountStatus, AgentInfoV2DataRole } from "../models";

export interface AgentInfoV2ResponseData {
  account_status?: AgentInfoV2DataAccountStatus;
  agent_id?: number;
  agent_name?: string;
  company_id?: number;
  company_name?: string;
  create_time?: string;
  customer_id?: number;
  customer_name?: string;
  role?: AgentInfoV2DataRole;
}

