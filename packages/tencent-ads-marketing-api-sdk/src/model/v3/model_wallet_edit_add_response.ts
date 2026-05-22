// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_edit_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WalletEditAddResponseData } from "../v3/index";

export interface WalletEditAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WalletEditAddResponseData;
}

