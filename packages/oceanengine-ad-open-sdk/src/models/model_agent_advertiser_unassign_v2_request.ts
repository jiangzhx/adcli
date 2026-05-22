// Generated from oceanengine/ad_open_sdk_go models/model_agent_advertiser_unassign_v2_request.go
// Do not edit manually.

import type { AgentAdvertiserUnassignV2Role, AgentAdvertiserUnassignV2Type } from "../models/index";

export interface AgentAdvertiserUnassignV2Request {
  advertiser_ids: (number | string)[];
  agent_id: number | string;
  employee_id: number | string;
  role: AgentAdvertiserUnassignV2Role;
  type: AgentAdvertiserUnassignV2Type;
}

