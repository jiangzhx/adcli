// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_image_processing_add_request.go
// Do not edit manually.

import type { OperationSpec } from "../v3/index";

export interface ImageProcessingAddRequest {
  account_id?: number | string;
  organization_id?: number | string;
  image_id?: string;
  operation_type?: string;
  operation_spec?: OperationSpec;
  file_size_max?: number;
}

