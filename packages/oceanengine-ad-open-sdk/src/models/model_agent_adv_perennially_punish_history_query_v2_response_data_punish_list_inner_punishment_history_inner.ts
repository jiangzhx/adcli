// Generated from oceanengine/ad_open_sdk_go models/model_agent_adv_perennially_punish_history_query_v2_response_data_punish_list_inner_punishment_history_inner.go
// Do not edit manually.

import type { AgentAdvPerenniallyPunishHistoryQueryV2DataPunishListPunishmentHistoryStatus } from "../models/index";

export interface AgentAdvPerenniallyPunishHistoryQueryV2ResponseDataPunishListInnerPunishmentHistoryInner {
  punish_end_time?: string;
  punish_log_id?: number | string;
  punish_reason?: string;
  punish_start_time?: string;
  status?: AgentAdvPerenniallyPunishHistoryQueryV2DataPunishListPunishmentHistoryStatus;
  submitter_id?: number | string;
  submitter_name?: string;
}

