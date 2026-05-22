// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentPrepayChargeGenerateRemittanceCodeV2RequestContractInfo } from "../models";

export interface AgentPrepayChargeGenerateRemittanceCodeV2Request {
  agent_id: number;
  caller_request_id: string;
  charge_amount: number;
  contract_info: AgentPrepayChargeGenerateRemittanceCodeV2RequestContractInfo;
  risk_info?: string;
}

