// 由 oceanengine/ad_open_sdk_go models/model_agent_adv_recharge_recharge_record_v2_filtering.go 生成
// 不要手动编辑。

import type { AgentAdvRechargeRechargeRecordV2FilteringAccountType, AgentAdvRechargeRechargeRecordV2FilteringPlatform, AgentAdvRechargeRechargeRecordV2FilteringRechargeType } from "../models/index";

export interface AgentAdvRechargeRechargeRecordV2Filtering {
  account_type?: AgentAdvRechargeRechargeRecordV2FilteringAccountType;
  adv_ids?: (number | string)[];
  platform?: AgentAdvRechargeRechargeRecordV2FilteringPlatform;
  recharge_type?: AgentAdvRechargeRechargeRecordV2FilteringRechargeType;
}

