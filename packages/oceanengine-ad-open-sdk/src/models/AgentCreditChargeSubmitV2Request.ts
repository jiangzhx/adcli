// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentCreditChargeSubmitV2RequestContractInfo } from "../models";

export interface AgentCreditChargeSubmitV2Request {
  agent_id: number | string;
  charge_amount: number;
  charge_request_id: string;
  contract_info: AgentCreditChargeSubmitV2RequestContractInfo;
}

