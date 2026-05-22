// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentTransferTransactionRecordV2FilteringPayeeType, AgentTransferTransactionRecordV2FilteringPlatform, AgentTransferTransactionRecordV2FilteringRemitterType, AgentTransferTransactionRecordV2FilteringTransferType } from "../models";

export interface AgentTransferTransactionRecordV2Filtering {
  account_ids?: number[];
  customer_ids?: number[];
  operator_ids?: number[];
  payee_customer_ids?: number[];
  payee_first_ad_agent_id?: number;
  payee_type?: AgentTransferTransactionRecordV2FilteringPayeeType;
  payees?: number[];
  platform?: AgentTransferTransactionRecordV2FilteringPlatform;
  remitter_customer_ids?: number[];
  remitter_first_ad_agent_id?: number;
  remitter_type?: AgentTransferTransactionRecordV2FilteringRemitterType;
  remitters?: number[];
  transfer_order_serial?: string;
  transfer_target_serial?: string;
  transfer_type: AgentTransferTransactionRecordV2FilteringTransferType;
}

