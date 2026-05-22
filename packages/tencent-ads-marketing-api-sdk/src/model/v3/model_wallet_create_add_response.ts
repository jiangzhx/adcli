// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_create_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, WalletCreateAddResponseData } from "../v3/index";

export interface WalletCreateAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WalletCreateAddResponseData;
}

