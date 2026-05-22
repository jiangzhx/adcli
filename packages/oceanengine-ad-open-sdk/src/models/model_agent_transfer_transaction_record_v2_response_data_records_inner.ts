// Generated from oceanengine/ad_open_sdk_go models/model_agent_transfer_transaction_record_v2_response_data_records_inner.go
// Do not edit manually.

import type { AgentTransferTransactionRecordV2DataRecordsDeliveryType, AgentTransferTransactionRecordV2DataRecordsPayeeRole, AgentTransferTransactionRecordV2DataRecordsRemitterRole, AgentTransferTransactionRecordV2DataRecordsTransferTargetPayStatus, AgentTransferTransactionRecordV2DataRecordsTransferType } from "../models/index";

export interface AgentTransferTransactionRecordV2ResponseDataRecordsInner {
  amount?: number;
  cash?: number;
  credit_amount?: number;
  delivery_type?: AgentTransferTransactionRecordV2DataRecordsDeliveryType;
  grants?: number;
  modify_time?: string;
  operator?: string;
  operator_id?: string;
  payee?: string;
  payee_customer_id?: string;
  payee_customer_name?: string;
  payee_first_ad_agent_id?: string;
  payee_first_ad_agent_name?: string;
  payee_name?: string;
  payee_role?: AgentTransferTransactionRecordV2DataRecordsPayeeRole;
  payee_second_ad_agent_id?: string;
  platform?: string;
  preloan_amount?: number;
  prepay_amount?: number;
  remark?: string;
  remitter?: string;
  remitter_customer_id?: string;
  remitter_customer_name?: string;
  remitter_first_ad_agent_id?: string;
  remitter_first_ad_agent_name?: string;
  remitter_name?: string;
  remitter_role?: AgentTransferTransactionRecordV2DataRecordsRemitterRole;
  remitter_second_ad_agent_id?: string;
  transfer_order_serial?: string;
  transfer_target_pay_status?: AgentTransferTransactionRecordV2DataRecordsTransferTargetPayStatus;
  transfer_target_serial?: string;
  transfer_type?: AgentTransferTransactionRecordV2DataRecordsTransferType;
}

