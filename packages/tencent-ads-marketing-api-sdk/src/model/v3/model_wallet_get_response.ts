// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wallet_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, WalletGetResponseData } from "../v3/index";

export interface WalletGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: WalletGetResponseData;
}

