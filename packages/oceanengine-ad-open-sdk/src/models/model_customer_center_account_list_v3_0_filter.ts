// Generated from oceanengine/ad_open_sdk_go models/model_customer_center_account_list_v3_0_filter.go
// Do not edit manually.

import type { CustomerCenterAccountListV30FilterAccountType } from "../models/index";

export interface CustomerCenterAccountListV30Filter {
  account_ids?: number | string[];
  account_name?: string;
  account_tag?: string;
  account_type: CustomerCenterAccountListV30FilterAccountType;
}

