// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_get_wallet_info.go
// Do not edit manually.

export interface WalletGetWalletInfo {
  balance?: number;
  wallet_id?: number | string;
  wallet_name?: string;
  agency_id?: number | string;
  agency_name?: string;
  mdm_id?: number | string;
  mdm_name?: string;
  tag_list?: string[];
  binding_account_list?: number[];
  bind_advertiser_cnt?: number;
}

