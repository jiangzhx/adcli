// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_transfer_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WalletTransferAddResponseData } from "../v3/index";

export interface WalletTransferAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WalletTransferAddResponseData;
}

