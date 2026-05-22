// Generated from oceanengine/ad_open_sdk_go models/model_agent_adv_perennially_punish_v2_request.go
// Do not edit manually.

import type { AgentAdvPerenniallyPunishV2PunishReason } from "../models/index";

export interface AgentAdvPerenniallyPunishV2Request {
  advertiser_ids: number | string[];
  agent_id: number | string;
  punish_reason: AgentAdvPerenniallyPunishV2PunishReason;
}

