// Generated from oceanengine/ad_open_sdk_go models/model_query_rebate_balance_v2_response_data_rebates_inner.go
// Do not edit manually.

export interface QueryRebateBalanceV2ResponseDataRebatesInner {
  agent_id?: number | string;
  agent_name?: string;
  amount?: number;
  archive_status?: number;
  archive_status_name?: string;
  contract_name?: string;
  contract_serial?: string;
  contract_subject_name?: string;
  create_time?: string;
  current_approval_status_name?: string;
  frozen_amount?: number;
  invoice_amount?: number;
  invoice_amount_remain?: number;
  invoice_frozen_amount?: number;
  invoice_status?: number;
  invoice_status_name?: string;
  is_online_stamp?: string;
  month_quarter?: number;
  month_quarter_name?: string;
  platform?: number;
  platform_name?: string;
  rebate_balance_id?: number | string;
  rebate_balance_serial?: string;
  stamp_status?: number;
  stamp_status_name?: string;
  standard?: number;
  standard_name?: string;
  status?: number;
  status_name?: string;
  use_type_names?: string[];
  use_types?: number[];
  used_amount?: number;
  year?: number;
}

