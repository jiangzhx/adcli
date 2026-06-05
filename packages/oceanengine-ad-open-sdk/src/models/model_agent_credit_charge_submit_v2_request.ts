// 由 oceanengine/ad_open_sdk_go models/model_agent_credit_charge_submit_v2_request.go 生成
// 不要手动编辑。

import type { AgentCreditChargeSubmitV2RequestContractInfo } from "../models/index";

export interface AgentCreditChargeSubmitV2Request {
  agent_id: number | string;
  charge_amount: number;
  charge_request_id: string;
  contract_info: AgentCreditChargeSubmitV2RequestContractInfo;
}

