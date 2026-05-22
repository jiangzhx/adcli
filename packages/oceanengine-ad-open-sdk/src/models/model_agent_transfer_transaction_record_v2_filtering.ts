// Generated from oceanengine/ad_open_sdk_go models/model_agent_transfer_transaction_record_v2_filtering.go
// Do not edit manually.

import type { AgentTransferTransactionRecordV2FilteringPayeeType, AgentTransferTransactionRecordV2FilteringPlatform, AgentTransferTransactionRecordV2FilteringRemitterType, AgentTransferTransactionRecordV2FilteringTransferType } from "../models/index";

export interface AgentTransferTransactionRecordV2Filtering {
  account_ids?: (number | string)[];
  customer_ids?: (number | string)[];
  operator_ids?: (number | string)[];
  payee_customer_ids?: (number | string)[];
  payee_first_ad_agent_id?: number | string;
  payee_type?: AgentTransferTransactionRecordV2FilteringPayeeType;
  payees?: number[];
  platform?: AgentTransferTransactionRecordV2FilteringPlatform;
  remitter_customer_ids?: (number | string)[];
  remitter_first_ad_agent_id?: number | string;
  remitter_type?: AgentTransferTransactionRecordV2FilteringRemitterType;
  remitters?: number[];
  transfer_order_serial?: string;
  transfer_target_serial?: string;
  transfer_type: AgentTransferTransactionRecordV2FilteringTransferType;
}

