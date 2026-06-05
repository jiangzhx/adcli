// 由 oceanengine/ad_open_sdk_go models/model_agent_adv_temporary_punish_v2_request.go 生成
// 不要手动编辑。

export interface AgentAdvTemporaryPunishV2Request {
  advertiser_ids: (number | string)[];
  agent_id: number | string;
  punish_end_time: string;
  punish_reason: string;
}

