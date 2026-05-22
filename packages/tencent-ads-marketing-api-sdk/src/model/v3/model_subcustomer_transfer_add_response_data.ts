// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_subcustomer_transfer_add_response_data.go
// Do not edit manually.

import type { AccountTypeMap } from "../v3/index";

export interface SubcustomerTransferAddResponseData {
  fund_type?: AccountTypeMap;
  amount?: number;
  external_bill_no?: string;
  time?: number;
  recommend_amount?: number;
}

