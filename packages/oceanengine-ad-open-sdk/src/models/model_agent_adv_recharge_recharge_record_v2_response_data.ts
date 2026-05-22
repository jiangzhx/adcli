// Generated from oceanengine/ad_open_sdk_go models/model_agent_adv_recharge_recharge_record_v2_response_data.go
// Do not edit manually.

import type { AgentAdvRechargeRechargeRecordV2ResponseDataDataInner, AgentAdvRechargeRechargeRecordV2ResponseDataPageInfo } from "../models/index";

export interface AgentAdvRechargeRechargeRecordV2ResponseData {
  code?: number;
  data?: AgentAdvRechargeRechargeRecordV2ResponseDataDataInner[];
  message?: string;
  page_info?: AgentAdvRechargeRechargeRecordV2ResponseDataPageInfo;
  total_amount?: number;
}

