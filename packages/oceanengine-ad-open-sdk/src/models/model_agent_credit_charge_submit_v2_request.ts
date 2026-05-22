// Generated from oceanengine/ad_open_sdk_go models/model_agent_credit_charge_submit_v2_request.go
// Do not edit manually.

import type { AgentCreditChargeSubmitV2RequestContractInfo } from "../models/index";

export interface AgentCreditChargeSubmitV2Request {
  agent_id: number | string;
  charge_amount: number;
  charge_request_id: string;
  contract_info: AgentCreditChargeSubmitV2RequestContractInfo;
}

