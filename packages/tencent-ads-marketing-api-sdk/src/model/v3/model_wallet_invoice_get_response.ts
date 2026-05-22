// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_invoice_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WalletInvoiceGetResponseData } from "../v3/index";

export interface WalletInvoiceGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WalletInvoiceGetResponseData;
}

