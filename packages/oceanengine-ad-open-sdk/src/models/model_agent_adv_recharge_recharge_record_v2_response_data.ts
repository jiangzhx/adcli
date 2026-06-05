// 由 oceanengine/ad_open_sdk_go models/model_agent_adv_recharge_recharge_record_v2_response_data.go 生成
// 不要手动编辑。

import type { AgentAdvRechargeRechargeRecordV2ResponseDataDataInner, AgentAdvRechargeRechargeRecordV2ResponseDataPageInfo } from "../models/index";

export interface AgentAdvRechargeRechargeRecordV2ResponseData {
  code?: number;
  data?: AgentAdvRechargeRechargeRecordV2ResponseDataDataInner[];
  message?: string;
  page_info?: AgentAdvRechargeRechargeRecordV2ResponseDataPageInfo;
  total_amount?: number;
}

