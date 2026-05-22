// Generated from oceanengine/ad_open_sdk_go models/model_agent_prepay_charge_generate_remittance_code_v2_request.go
// Do not edit manually.

import type { AgentPrepayChargeGenerateRemittanceCodeV2RequestContractInfo } from "../models/index";

export interface AgentPrepayChargeGenerateRemittanceCodeV2Request {
  agent_id: number | string;
  caller_request_id: string;
  charge_amount: number;
  contract_info: AgentPrepayChargeGenerateRemittanceCodeV2RequestContractInfo;
  risk_info?: string;
}

