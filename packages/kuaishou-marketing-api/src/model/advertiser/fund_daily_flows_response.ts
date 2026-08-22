// Generated from github.com/bububa/kwai-marketing-api/model/advertiser/fund_daily_flows_response.go
// Do not edit manually.

export interface FundDailyFlowsResponse {
  total_count?: number;
  details?: FundDailyFlow[];
}

export interface FundDailyFlow {
  date?: string;
  daily_charge?: number;
  real_charged?: number;
  contract_rebate_real_charged?: number;
  direct_rebate_real_charged?: number;
  daily_transfer_in?: number;
  daily_transfer_out?: number;
  balance?: number;
  real_recharged?: number;
  contract_rebate_real_recharged?: number;
  direct_rebate_real_recharged?: number;
  order_total_charged?: number;
  order_real_charged?: number;
  order_contract_charged?: number;
  order_direct_charged?: number;
}
