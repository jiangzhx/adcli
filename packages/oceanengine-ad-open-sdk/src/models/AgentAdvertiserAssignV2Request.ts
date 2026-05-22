// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentAdvertiserAssignV2Role, AgentAdvertiserAssignV2Type } from "../models";

export interface AgentAdvertiserAssignV2Request {
  advertiser_ids: number | string[];
  agent_id: number | string;
  employee_id: number | string;
  role: AgentAdvertiserAssignV2Role;
  type: AgentAdvertiserAssignV2Type;
}

