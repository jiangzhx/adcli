// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_subcustomer_transfer_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, SubcustomerTransferAddResponseData } from "../v3/index";

export interface SubcustomerTransferAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: SubcustomerTransferAddResponseData;
}

