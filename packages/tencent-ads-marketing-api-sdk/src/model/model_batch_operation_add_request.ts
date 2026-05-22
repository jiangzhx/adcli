// Generated from tencentad/marketing-api-go-sdk pkg/model/model_batch_operation_add_request.go
// Do not edit manually.

import type { BatchOperationType, OperationSpec, ResourceType } from "../model/index";

export interface BatchOperationAddRequest {
  resource_type?: ResourceType;
  operation_type?: BatchOperationType;
  resource_id_list?: number[];
  operation_spec?: OperationSpec;
  account_id?: number | string;
}

